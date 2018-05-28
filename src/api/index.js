const DotaURL="https://api.opendota.com/api/heroStats";


export const fetchImages = async () =>
{
    try {
        const response = await fetch(DotaURL);
        const data=await response.json();
        return data; 
    } catch (error) {
        console.log(error);
        return null;
    }
}