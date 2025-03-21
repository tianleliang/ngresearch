import { Background, Companies, Connect, Container, Features, Hero, Reviews, Wrapper } from "@/components";
import WhyChoose from "@/components/marketing/why-choose";

const HomePage = () => {
    return (
        <Background>
            <Wrapper className="py-20 relative">
                <Container className="relative">
                    <Hero />
                </Container>
                <Container className="py-8 lg:py-20">
                    <Companies />
                </Container>
                <Features />
                <WhyChoose />
                <Reviews />
            </Wrapper>
        </Background>
    )
};

export default HomePage;
