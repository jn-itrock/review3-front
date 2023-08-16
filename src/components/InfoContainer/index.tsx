import { Title } from "../Title";
import { SearchBar } from "../searchBar";
import { Subtitle } from "../subtitle";
import { WrapperContainer } from "./styles";

export const InfoContainer = () => {

    return (
        <WrapperContainer>
            <Title />
            <Subtitle />
            <SearchBar />
        </WrapperContainer>
    );
};