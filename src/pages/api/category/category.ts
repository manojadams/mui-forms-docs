import { NextApiRequest, NextApiResponse } from "next";

const categories = [
    {name: 'Laptop', id: 'laptop'},
    {name: 'Phone', id: 'phone'},
    {name: 'Camera', id: 'camera'},
];

const getCategories = (req: NextApiRequest, res: NextApiResponse) => {
    return res.json(categories);
};

export default getCategories;
