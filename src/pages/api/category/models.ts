import { NextApiRequest, NextApiResponse } from "next";

const appleModels = {
    brand_id: "apple",
    category_id: "laptop",
    values: [
        { "id": "macbook-air-m1-2020", "name": "MacBook Air (M1, 2020)" },
        { "id": "macbook-air-m2-2022", "name": "MacBook Air (M2, 2022)" },
        { "id": "macbook-air-m3-2024", "name": "MacBook Air (M3, 2024)" },
        { "id": "macbook-pro-13-m2-2022", "name": "MacBook Pro 13-inch (M2, 2022)" },
        { "id": "macbook-pro-14-m3-2023", "name": "MacBook Pro 14-inch (M3 Pro/Max, 2023)" },
        { "id": "macbook-pro-16-m3-2023", "name": "MacBook Pro 16-inch (M3 Pro/Max, 2023)" },
        { "id": "macbook-pro-14-m4-2024", "name": "MacBook Pro 14-inch (M4, 2024)" },
        { "id": "macbook-pro-16-m4-2024", "name": "MacBook Pro 16-inch (M4, 2024)" }
      ]
};

const dellModels = {
    brand_id: "dell",
    category_id: "laptop",
    values: [
        { "id": "dell-xps-14", "name": "Dell XPS 14 (2024)" },
        { "id": "dell-xps-17", "name": "Dell XPS 17 (2024)" },
        { "id": "dell-14-plus", "name": "Dell 14 Plus (2025)" },
        { "id": "dell-16-plus", "name": "Dell 16 Plus (2025)" },
        { "id": "dell-14-2-in-1-plus", "name": "Dell 14 2‑in‑1 Plus (2025)" },
        { "id": "dell-pro-max-18-plus", "name": "Dell Pro Max 18 Plus (upcoming 2025)" },
        { "id": "dell-precision-5490", "name": "Dell Precision 5490 (2024)" },
        { "id": "dell-alienware-m18-r2", "name": "Alienware m18 R2 (2024)" },
        { "id": "dell-vostro-3520", "name": "Dell Vostro 3520 (2024)" }
      ]
};

const hpModels = {
    brand_id: "hp",
    category_id: "laptop",
    values: [
        { "id": "hp-omnibook-ultra-flip-14", "name": "HP OmniBook Ultra Flip 14 (2024)" },
        { "id": "hp-omen-max-16", "name": "HP Omen Max 16 (2025)" },
        { "id": "hp-spectre-x360-14", "name": "HP Spectre x360 14 (2023‑2024)" },
        { "id": "hp-envy-x360-13", "name": "HP Envy 13 x360 (2022‑2023)" },
        { "id": "hp-zbook-ultra-14-g1a", "name": "HP ZBook Ultra 14 G1a (2025)" },
        { "id": "hp-zbook-fury-18-g1i", "name": "HP ZBook Fury 18 G1i (2025)" },
        { "id": "hp-elitebook-x-g1a", "name": "HP EliteBook X G1a (2025)" },
        { "id": "hp-elitebook-630-g10", "name": "HP EliteBook 630 G10 (2023‑business)" },
        { "id": "hp-elitebook-840-g10", "name": "HP EliteBook 840 G10 (2023‑business)" },
        { "id": "hp-elitebook-x360-1040-g10", "name": "HP EliteBook x360 1040 G10 (2023‑business)" }
      ]
};

const applePhoneModels = {
    brand_id: "apple",
    category_id: "phone",
    values: [
        { "id": "iphone-16e", "name": "iPhone 16e (2025 entry‑level)" },
        { "id": "iphone-16", "name": "iPhone 16 (2024)" },
        { "id": "iphone-16-plus", "name": "iPhone 16 Plus (2024)" },
        { "id": "iphone-16-pro", "name": "iPhone 16 Pro (2024)" },
        { "id": "iphone-16-pro-max", "name": "iPhone 16 Pro Max (2024)" }
      ]      
};

const samsungPhoneModels = {
    brand_id: "samsung",
    category_id: "phone",
    values: [
        { "id": "galaxy-s25", "name": "Galaxy S25" },
        { "id": "galaxy-s25-plus", "name": "Galaxy S25+" },
        { "id": "galaxy-s25-edge", "name": "Galaxy S25 Edge" },
        { "id": "galaxy-s25-ultra", "name": "Galaxy S25 Ultra" },
        { "id": "galaxy-z-fold7", "name": "Galaxy Z Fold7" },
        { "id": "galaxy-z-flip7", "name": "Galaxy Z Flip7" },
        { "id": "galaxy-z-flip7-fe", "name": "Galaxy Z Flip7 FE" },
        { "id": "galaxy-a56-5g", "name": "Galaxy A56 5G" },
        { "id": "galaxy-a36-5g", "name": "Galaxy A36 5G" },
        { "id": "galaxy-a26-5g", "name": "Galaxy A26 5G" },
        { "id": "galaxy-a16-5g", "name": "Galaxy A16 5G" },
        { "id": "galaxy-m36-5g", "name": "Galaxy M36 5G" },
        { "id": "galaxy-f36-5g", "name": "Galaxy F36 5G" }
      ]     
};

const xiomiPhoneModels = {
    brand_id: "xiaomi",
    category_id: "phone",
    values: [
        { "id": "xiaomi-15", "name": "Xiaomi 15" },
        { "id": "xiaomi-15-pro", "name": "Xiaomi 15 Pro" },
        { "id": "xiaomi-15-ultra", "name": "Xiaomi 15 Ultra" },
        { "id": "xiaomi-15s-pro", "name": "Xiaomi 15S Pro" },
        { "id": "xiaomi-14", "name": "Xiaomi 14" },
        { "id": "xiaomi-14-pro", "name": "Xiaomi 14 Pro" },
        { "id": "xiaomi-14-ultra", "name": "Xiaomi 14 Ultra" },
        { "id": "xiaomi-14t", "name": "Xiaomi 14T" },
        { "id": "xiaomi-14t-pro", "name": "Xiaomi 14T Pro" },
        { "id": "xiaomi-14-civi", "name": "Xiaomi 14 Civi" },
        { "id": "xiaomi-mix-fold-3", "name": "Xiaomi Mix Fold 3" },
        { "id": "xiaomi-mix-flip", "name": "Xiaomi Mix Flip" },
        { "id": "xiaomi-civi-4-pro", "name": "Xiaomi Civi 4 Pro" },
        { "id": "xiaomi-redmi-note-14-5g", "name": "Redmi Note 14 5G" },
        { "id": "xiaomi-redmi-note-14-pro", "name": "Redmi Note 14 Pro 5G" },
        { "id": "xiaomi-redmi-note-14-pro-plus", "name": "Redmi Note 14 Pro+ 5G" },
        { "id": "xiaomi-redmi-13c-5g", "name": "Redmi 13C 5G" }
      ]      
};

const canonCameraModels = {
    brand_id: "canon",
    category_id: "camera",
    values: [
        { "id": "canon-eos-r1", "name": "Canon EOS R1" },
        { "id": "canon-eos-r5-mark-ii", "name": "Canon EOS R5 Mark II" },
        { "id": "canon-eos-r6-mark-ii", "name": "Canon EOS R6 Mark II" },
        { "id": "canon-eos-r50-v", "name": "Canon EOS R50 V" },
        { "id": "canon-eos-r50", "name": "Canon EOS R50" },
        { "id": "canon-eos-r100", "name": "Canon EOS R100" }
      ]
};

const nikonCameraModels = {
    brand_id: "nikon",
    category_id: "camera",
    values: [
        { "id": "nikon-z9", "name": "Nikon Z9" },
        { "id": "nikon-z8", "name": "Nikon Z8" },
        { "id": "nikon-z7-ii", "name": "Nikon Z7 II" },
        { "id": "nikon-z7", "name": "Nikon Z7" },
        { "id": "nikon-z6-iii", "name": "Nikon Z6 III" },
        { "id": "nikon-z6-ii", "name": "Nikon Z6 II" },
        { "id": "nikon-z6", "name": "Nikon Z6" },
        { "id": "nikon-z5-ii", "name": "Nikon Z5 II" },
        { "id": "nikon-z5", "name": "Nikon Z5" },
        { "id": "nikon-zf", "name": "Nikon Zf" },
        { "id": "nikon-z50-ii", "name": "Nikon Z50 II" },
        { "id": "nikon-z50", "name": "Nikon Z50" },
        { "id": "nikon-z30", "name": "Nikon Z30" },
        { "id": "nikon-zfc", "name": "Nikon Z fc" },
        { "id": "nikon-d850", "name": "Nikon D850 (DSLR)" },
        { "id": "nikon-d780", "name": "Nikon D780 (DSLR)" },
        { "id": "nikon-d7500", "name": "Nikon D7500 (DSLR)" },
        { "id": "nikon-d500", "name": "Nikon D500 (DSLR)" },
        { "id": "nikon-d6", "name": "Nikon D6 (DSLR flagship)" },
        { "id": "nikon-coolpix-p1100", "name": "Nikon Coolpix P1100 (bridge camera)" }
      ]
      
}

const sonyCameraModels = {
    brand_id: "sony",
    category_id: "camera",
    values: [
        { "id": "sony-alpha-1-ii", "name": "Sony α1 II" },
        { "id": "sony-alpha-9-iii", "name": "Sony α9 III" },
        { "id": "sony-alpha-7r-v", "name": "Sony α7R V" },
        { "id": "sony-a7-v", "name": "Sony α7 V (upcoming 2025)" },
        { "id": "sony-a7s-iv", "name": "Sony α7S IV (rumored 2025)" },
        { "id": "sony-fx3-ii", "name": "Sony FX3 II (rumored 2025)" },
        { "id": "sony-fx30", "name": "Sony FX30" },
        { "id": "sony-zv-e10-ii", "name": "Sony ZV‑E10 II" },
        { "id": "sony-a6100", "name": "Sony a6100" },
        { "id": "sony-a6700", "name": "Sony a6700" },
        { "id": "sony-a7c-ii", "name": "Sony A7C II" }
      ]      
};

const models = [
    appleModels,
    dellModels,
    hpModels,
    applePhoneModels,
    samsungPhoneModels,
    xiomiPhoneModels,
    canonCameraModels,
    nikonCameraModels,
    sonyCameraModels,
];

const getModels = (req: NextApiRequest, res: NextApiResponse) => {
    const categoryId = req.query.category_id;
    const brandId = req.query.brand_id;

    if (!brandId || !categoryId) {
        res.status(400).send({});
    }

    const model = models.find(m => m.brand_id === brandId && m.category_id === categoryId);

    if (!model) {
        res.status(400).send({});
        return;
    }

    return res.json(model.values);
};

export default getModels;
