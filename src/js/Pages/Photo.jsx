import TopImage from "../../Images/photo_book_top.jpg"
import Container from "../Compornents/Container";
import Title from "../Compornents/Title";


export default function Photo() {

    return (
        <div className="absolute h-screen w-screen" style={{backgroundColor:"#F4F9FF"}}>
            <div style={{"margin":"60px 140px"}}>
                <header className="flex flex-col gap-3.5">
                    <h1 className="text-xl font-bold" style={{fontFamily:"Meiryo", color:"#333333"}}>PHOTO BOOK</h1>
                    <img className="object-cover" style={{height:"400px"}} src={TopImage} alt="top-img" />
                </header>
                <Container addClassName="bg-white" addStyle={{padding:"30px"}}>
                    <Title text="INDEX" />
                </Container>
            </div>
        </div>
    );
}


