import { NextApiRequest, NextApiResponse } from "next";

const laptops = {
    id: 'laptop',
    values: [
        { "id": "apple", "name": "Apple" },
        { "id": "dell", "name": "Dell" },
        { "id": "hp", "name": "HP" },
      ]
};

const phones = {
    id: 'phone',
    values: [
        { "id": "apple", "name": "Apple" },
        { "id": "samsung", "name": "Samsung" },
        { "id": "xiaomi", "name": "Xiaomi" },
      ]
};

const cameras = {
    id: 'camera',
    values: [
        { "id": "canon", "name": "Canon" },
        { "id": "nikon", "name": "Nikon" },
        { "id": "sony", "name": "Sony" },
      ]      
}

const brands = [laptops, phones, cameras];

const getBrands = (req: NextApiRequest, res: NextApiResponse) => {
    const type = req.query.category_id;
    if (!type) {
        res.status(400).send("category id not found");
        return;
    }

    const brand = brands.find(b => b.id === type);

    if (!brand?.values) {
        res.status(400).send({});
        return;
    }

    return res.json(brand.values);
};

export default getBrands;
