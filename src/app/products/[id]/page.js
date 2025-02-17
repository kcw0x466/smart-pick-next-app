

export default async function Products({ params }) {
    const id = (await params).id
    return(
        <div>
            <h1>상품 상세 페이지</h1>
            <p>상품 번호: {id}</p>
        </div>      
    );
}