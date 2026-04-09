import { createWriteStream, mkdirSync, existsSync } from "fs";
import { pipeline } from "stream/promises";
import path from "path";

const BASE_DIR = process.cwd();
const CDN = "https://cdn.prod.website-files.com/68513e75563291f5d48ada9b/";
const CDN2 = "https://cdn.prod.website-files.com/696f5df56fadb6b7bc92066d/";

const assets = [
  // Fonts
  { url: CDN + "68515bedc8fc0874202ca7b7_Inter_18pt-SemiBold.woff2", dest: "public/fonts/Inter-SemiBold.woff2" },
  { url: CDN + "68515840fe93122a56fd2d7b_Inter_18pt-Medium.woff2", dest: "public/fonts/Inter-Medium.woff2" },
  { url: CDN + "685158403c3c548ae45f7145_Inter_18pt-Regular.woff2", dest: "public/fonts/Inter-Regular.woff2" },
  { url: CDN + "696f51db01140a6f9fe81196_GesturaHeadline-Regular.woff2", dest: "public/fonts/GesturaHeadline-Regular.woff2" },

  // Hero images
  { url: CDN + "6971e3bc86a4ac7f4f90ad3e_59da4f13af61fe7a4c40d79a5fada83a_hero%20bg%20img%20mobile.webp", dest: "public/images/hero-bg-mobile.webp" },
  { url: CDN + "696a66cbf5604ca0364be004_f111a9e21125becc25ca317bbe0229ca_hero%20bg%20img.webp", dest: "public/images/hero-bg.webp" },

  // Feature section images
  { url: CDN + "6971177432ff087027915fc9_f276e7ddc524dfe27b757fb957c8212f_News%20and%20financial%20monitoring%20across%20your%20entire%20portfolio.webp", dest: "public/images/feature-news-monitoring.webp" },
  { url: CDN + "69711a289bc754944828486e_4432227c2c20d6ed2be084014d8ea128_Get%20briefed%20before%20every%20meeting.webp", dest: "public/images/feature-get-briefed.webp" },
  { url: CDN + "696df7aeb646a7a2198327de_36fa0c4d18a844367e1911df246f6613_earth.webp", dest: "public/images/earth.webp" },
  { url: CDN + "6970c8fca3eba219d35aad0d_676c6e25b38e2f972faf879f137f2ccf_You%20can%27t%20keep%20track%20of%20it%20all.%20Aira%20can..webp", dest: "public/images/feature-track-all.webp" },
  { url: CDN + "696fb176d53cdb4141dabf26_News%20and%20financial%20monitoring%20across%20your%20entire%20portfolio.webp", dest: "public/images/feature-news-monitoring-2.webp" },
  { url: CDN + "696fb4dbd70864310d0f3e00_a6b21c7de040bf3e5c399efbe36478f8_Need%20to%20prepare%20for%20tomorrow%27s%20meeting%3F.webp", dest: "public/images/feature-prepare-meeting.webp" },
  { url: CDN + "696fb4dbb9f045211b0bb8c8_6fb3577b0860d9d8aec94dafded24a35_Just%20got%20off%20a%20call%3F.webp", dest: "public/images/feature-call-summary.webp" },
  { url: CDN + "696fb4db32bd1d5700f0c75c_6879297f133f6bec408e9984af2951e2_Want%20to%20research%20a%20prospect%20before%20reaching%20out%3F.webp", dest: "public/images/feature-research-prospect.webp" },
  { url: CDN + "696e2e7498a08e174f81599c_00b1fe3bbb0a9b915f42c80b349824bf_cta%20img.webp", dest: "public/images/cta-image.webp" },

  // Event images
  { url: CDN2 + "69bd17996ecafe36963fd9e5_Dublin.webp", dest: "public/images/event-dublin.webp" },
  { url: CDN2 + "69ce72bf2fb200ae10b2223b_%20%20.webp", dest: "public/images/event-img-2.webp" },
  { url: CDN + "6981ffe3f2ce2f6e43599171_v%C3%A4lj%201.avif", dest: "public/images/event-photo-1.avif" },
  { url: CDN + "696faf3031e4b3dca17dfdcf_DSC_8748-1%20(1).avif", dest: "public/images/event-photo-2.avif" },
  { url: CDN + "6981ffeb3f8412a6f48f5088_KAT_0177_Denoised%201.avif", dest: "public/images/event-photo-3.avif" },
  { url: CDN + "696f9ec7ca3c8b12d4d5c723_national.avif", dest: "public/images/event-national.avif" },
  { url: CDN + "696f9c422851badf1feb0b0f_DSC_8390-22.avif", dest: "public/images/event-photo-4.avif" },
  { url: CDN + "6983525c1572fa25d06e40b8_v%C3%A4lj%207%20(1).jpg", dest: "public/images/event-photo-5.jpg" },
  { url: CDN + "69a9979d1d9f23cadfcbb46b_Screenshot%202026-03-05%20at%2015.47.52.png", dest: "public/images/event-screenshot.png" },
  { url: CDN + "69830354f94b58f3cb507685_DSC06825.avif", dest: "public/images/event-photo-6.avif" },

  // Meeting section images
  { url: CDN + "696e27c0ae60f3abe24dca25_ae4e824f5d0b77a6099ce313c9c7f374_Walk%20into%20every%20meeting%20fully%20prepared.webp", dest: "public/images/meeting-prepared.webp" },
  { url: CDN + "696e27c0bdb319ecf88464b5_Let%20Aira%20take%20notes%20while%20you%20focus%20on%20closing.webp", dest: "public/images/meeting-notes.webp" },
  { url: CDN + "696e27c092d981bc1d2f8f77_4b8c3aa70672cd412ab0a596c5011982_Get%20a%20structured%20summary%2C%20automatically.webp", dest: "public/images/meeting-summary.webp" },

  // Video
  { url: "https://storage.googleapis.com/ew-assets/aira/aira-3.mp4", dest: "public/videos/aira-demo.mp4" },
  { url: CDN + "69a9baca939bacb4f1c2ba3e_videoframe_0.png", dest: "public/videos/aira-demo-poster.png" },
];

async function download(url, dest) {
  const fullDest = path.join(BASE_DIR, dest);
  const dir = path.dirname(fullDest);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  if (existsSync(fullDest)) {
    console.log(`  skip ${dest}`);
    return;
  }
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; asset-downloader/1.0)" },
  });
  if (!res.ok) {
    console.error(`  FAIL ${dest} — HTTP ${res.status}`);
    return;
  }
  await pipeline(res.body, createWriteStream(fullDest));
  console.log(`  OK   ${dest}`);
}

async function downloadBatch(items, concurrency = 4) {
  for (let i = 0; i < items.length; i += concurrency) {
    await Promise.all(items.slice(i, i + concurrency).map(({ url, dest }) => download(url, dest)));
  }
}

console.log("Downloading Aira assets...\n");
await downloadBatch(assets);
console.log("\nDone.");
