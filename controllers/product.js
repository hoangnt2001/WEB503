const products = [
            {id:1,name:"productA"},
            {id:2,name:"productB"},
            {id:3,name:"productB"},
            {id:4,name:"productB"},
        ];
export const list = (req, res) =>{
    res.json(products)
}
export const read = (req, res) =>{
    res.json(products.find(item => item.id === +req.params.id))
}
export const remove = (req, res) =>{
    res.json(products.filter(item => item.id !== +req.params.id))
}
export const update = (req, res) =>{
    res.json(products.map(item => item.id === +req.params.id ?req.body : item ));
}
export const create =  (req, res) => {
    // products.push(req.body);
    const product  = req.body
    res.json(product);
}