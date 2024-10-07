import ProductsContainer from "@/components/products/ProductsContainer";

export default function Page ({searchParams}:{searchParams:{layout?:string;search?:string}}) {
    const {layout='grid',search=''} = searchParams;
    console.log(searchParams)
    return <ProductsContainer layout={layout} search={search} />
}