import TopImage from "../../Images/photo_book_top.jpg";
import BookDetail from "../Compornents/BookDetail";
import Container from "../Compornents/Container";
import Title from "../Compornents/Title";
import IndexItem from "../Compornents/IndexItem";


export default function Photo() {


    return (
        <div className="absolute h-fit w-screen" style={{backgroundColor:"#F4F9FF"}}>
            <div style={{"margin":"60px 140px 0 140px"}}>
                <header className="flex flex-col gap-3.5">
                    <h1 className="text-xl font-bold" style={{fontFamily:"Meiryo", color:"#333333"}}>PHOTO BOOK</h1>
                    <img className="object-cover" style={{height:"400px"}} src={TopImage} alt="top-img" />
                </header>
                <Container addClassName="bg-white">
                    <Title text="INDEX" />
                    <div className="flex flex-col gap-5">
                        <IndexItem key={1} />
                        <IndexItem key={2} />
                        <IndexItem key={3} />
                        <IndexItem key={4} />
                        <IndexItem key={5} />
                    </div>
                </Container>
                <Container addClassName="mx-auto">
                    <Title text="DETAIL" />
                    <BookDetail />
                </Container>
                <footer>
                    <Container>
                        <small className="text-gray-400">&copy; 2023 AyakaTsukuda</small>
                    </Container>
                </footer>
            </div>
        </div>
    );
}


