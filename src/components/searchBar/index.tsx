import { ContainerWrapper, Input } from "../searchBar/styles";


export const SearchBar = () => {

    return(
        <ContainerWrapper>
            <Input
                name="input"
                placeholder="Search the event"
            />
            <img 
                src="/images/search.svg"
            />
        </ContainerWrapper>
    );
};