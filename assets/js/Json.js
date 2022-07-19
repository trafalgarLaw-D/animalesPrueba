let iife = (() => {
    const info = async ()=>{
        try {
            const data = await fetch('./animales.json');
            if(data.status == 200){
                const json = await data.json();
                return json; 
            }
        } catch (error) {
            alert(error)
        }
    };

    return { info }
})();
export default iife;