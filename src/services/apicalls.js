import axios from "axios";
const BASEURL = 'https://cataas.com';
async function getAllTags(){
try {
    const response = await axios.get(BASEURL+'/api/tags');
    return response;
} catch (error) {
    console.log(error);
}
}

async function getByTag(payload){
    try {
        const response = await axios.get(BASEURL+'/cat/'+payload.tag);
        return response;
    } catch (error) {
        console.log(error);
    }
    }





export {getAllTags,getByTag};