import { CollectPolicyType, ContentFocus,useCreatePost, useActiveProfile, ReferencePolicyType } from '@lens-protocol/react-web';
import { Dispatch, SetStateAction, useState } from 'react';

interface Props {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

interface IValuesProps {
    poapEventId: string;
    title: string;
    description: string;
};


export const CreateEvent = ({ setIsOpen }: Props) => {


    const { data: activeProfile } = useActiveProfile();
    const upload = async (): Promise<string> =>{
        try{
            let url = "http://10.10.1.179:3000/event"

            const form = new FormData();

            form.append("poapEventId", values.poapEventId)
            form.append("title", values.title)
            form.append("description", values.description)

        const apiResponse = await fetch(url, {
            method: "POST",
            body: form
        })
        const response = await apiResponse.json();
        console.log(response);
        return `http://10.10.1.179:3000/event/${response._id}`
        // return `http://192.168.0.115:3000/event/91929319319`
        
        }catch(e){
            console.log("Este es el error", e);
            return "Error"
        }
    };
    
    const { execute: create, error, isPending } = useCreatePost({ publisher: activeProfile!, upload });

    const [values, setValue] = useState<IValuesProps>({
        poapEventId: "",
        title: "",
        description: ""
    })

    const { poapEventId, title, description } = values;

  
        const onSubmit = async (content: string) => {
            await create({
            content,
            contentFocus: ContentFocus.TEXT_ONLY,
            locale: 'en',
            collect: {
                type: CollectPolicyType.NO_COLLECT
            },
            reference: {
                type: ReferencePolicyType.ANYONE
            }
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    };

    return(
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
        }}>
            <div style={{
                width: "300px",
                backgroundColor: "#FAFAFA",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                padding: "20px"
            }}>
                <span>Create event</span>
                <input 
                    style={{
                        width:"80%",
                        border: "1px solid #08FB06",
                        borderRadius: "40px",
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                        display: "flex",
                        gap: "20px",
                        padding: "8px 12px"
                    }}
                    placeholder='Identifier'
                    name="poapEventId"
                    value={poapEventId}
                    onChange={(e) => handleChange(e)}
                />
                <input
                style={{
                    width:"80%",
                    border: "1px solid #08FB06",
                    borderRadius: "40px",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    display: "flex",
                    gap: "20px",
                    padding: "8px 12px"
                }} 
                    placeholder='Title'
                    name="title"
                    value={title}
                    onChange={(e) => handleChange(e)}
                />
                <input 
                style={{
                    width:"80%",
                    border: "1px solid #08FB06",
                    borderRadius: "40px",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    display: "flex",
                    gap: "20px",
                    padding: "8px 12px"
                }}
                    placeholder='Description'
                    name="description"
                    value={description}
                    onChange={(e) => handleChange(e)}
                />
                <p
                    onClick={() => setIsOpen(false)}
                >Cerrar popup</p>
                <p
                    onClick={() => onSubmit(`${values}`)}
                >Crear Evento</p>
            </div>
        </div>
    )

};