export function uid() {
    return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
  };

export type Products = {
    id: string,
    name: string,
    price: number
}

export const productList: Products [] = [
    {
        id: uid(),
        name:"Air Jordan 1 Retro Atmosphere",
        price: 1700
    },
    {
        id: uid(),
        name: "Yeezy Bosst 350 v2 Bone",
        price: 1499
    },
    {
        id: uid(),
        name: "Air Jordan 1 Mid Coconut Milk",
        price: 1200
    }
]