#!/usr/bin/env bash
# Generate all images for debrisremovalinsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/debrisremovalinsurance.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — DEBRIS REMOVAL / dump truck insurance ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of a debris-hauling jobsite at golden-hour dawn: a clean modern dump truck and a roll-off container truck parked beside a fresh pile of construction debris and a roll-off dumpster, a hauling crew in high-vis vests and hard hats working, warm morning light, industrial hauling scene. Bright professional commercial photography, warm natural colors, no text, no watermark" 4

gen "coverage.jpg" \
  "Photorealistic elevated aerial view of a regional hauling yard and jobsite: a row of dump trucks and roll-off trucks, organized stacks of roll-off containers, a debris stockpile, blue sky with soft clouds. Clean professional industrial photography, no text" 4

gen "about.jpg" \
  "Photorealistic authentic portrait of a friendly dump truck owner-operator wearing a high-vis vest and cap standing in front of a clean tandem-axle dump truck at a jobsite, warm natural light, trustworthy genuine expression, shallow depth of field, commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide cinematic landscape of a debris hauling operation at sunrise: a dump truck and roll-off truck at a clean construction jobsite with organized roll-off containers, blue sky, warm golden light. Premium industrial commercial photography, clean and inviting, no text, no watermark" 4 1216 640

gen "dump-truck-insurance.jpg" \
  "Photorealistic close-up of a clean modern tandem-axle dump truck parked at a construction debris jobsite, polished chrome and steel dump body, warm morning light, shallow depth of field, professional commercial automotive photography, no text" 4

gen "general-liability.jpg" \
  "Photorealistic photo of a junk removal crew in high-vis vests and gloves carefully carrying furniture out of a residential home and loading it into a box truck, warm friendly authentic moment, professional photography, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic photo of a clean roll-off truck and a dump truck parked at a hauling yard, blue sky, polished vehicles, professional commercial automotive photography, no text" 4

gen "workers-compensation.jpg" \
  "Photorealistic photo of a debris-hauling crew in hard hats and high-vis vests safely loading a roll-off container at a jobsite, bright professional industrial photography, warm natural light, no text" 4

gen "roll-off-truck-insurance.jpg" \
  "Photorealistic photo of a roll-off truck delivering a large open-top roll-off dumpster onto a clean residential driveway at a renovation jobsite, blue sky, professional commercial photography, no text" 4

gen "pollution-liability.jpg" \
  "Photorealistic photo of a demolition site with sorted construction and demolition debris, a hauler in full PPE and respirator handling regulated material, contained loads, professional environmental industrial photography, no text" 4

gen "tools-equipment.jpg" \
  "Photorealistic photo of hauling equipment neatly arranged in a yard: a skid steer loader, dump trailers, and a stack of roll-off containers, blue sky, professional commercial photography, no text" 4

gen "umbrella.jpg" \
  "Photorealistic photo of a small fleet of dump trucks and roll-off trucks lined up at a hauling yard at sunset, silhouettes with warm sky, conveying large-scale protection, professional commercial photography, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
