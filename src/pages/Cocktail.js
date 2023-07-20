import React from 'react';
import NameCocktail from '../Components/NameCocktail'

class News extends React.Component {
    data=[
            {
                "ingredients": [
                    "6 cl white rum",
                    "2 cl lime juice",
                    "2 bar spoons superfine sugar"
                ],
                "instructions": "In a cocktail shaker add all ingredients. Stir well to dissolve the sugar. Add ice and shake. Strain into chilled cocktail glass.",
                "name": "daiquiri"
            },
            {
                "ingredients": [
                    "1 oz Batavia Arrack, Van Oosten",
                    "1 oz Trinidad rum, Scarlet Ibis",
                    "1 oz Lime cordial (Toby Cecchini's; see link)",
                    "3 lf Curry (shaken)",
                    "1 wdg Lime (as garnish)"
                ],
                "instructions": "Shake, strain over cracked ice, garnish.",
                "name": "javanese daiquiri"
            },
            {
                "ingredients": [
                    "1 1/2 oz Light rum",
                    "1 oz Lime juice",
                    "1/2 oz Simple syrup (1:1)",
                    "1 T Strawberry preserves",
                    "1 dr Orange flower water"
                ],
                "instructions": "Shake, double strain, chilled coupe, no garnish.",
                "name": "craft strawberry daiquiri (kevin liu)"
            },
            {
                "ingredients": [
                    "3/4 oz Demerara Rum, El Dorado 15",
                    "3/4 oz Rhum Agricole, Rhum JM (VSOP)",
                    "1/2 oz Overproof rum (Barrell Jamaica batch 1)",
                    "1 oz Lime juice",
                    "2/3 oz Cane syrup"
                ],
                "instructions": "Shake it until hands feel glued to the tins, then immediately strain, no garnish.",
                "name": "daiquiri (simo)"
            },
            {
                "ingredients": [
                    "3/4 oz Jamaican rum, Wray & Nephew Overproof",
                    "3/4 oz Herbal liqueur, Green Chartreuse",
                    "3/4 oz Lime juice",
                    "1/3 oz Falernum, Velvet Falernum",
                    "1 sli Lime"
                ],
                "instructions": "Shake with ice and strain into a cocktail glass. Garnish with a lime wheel.",
                "name": "nuclear daiquiri"
            },
            {
                "ingredients": [
                    "1 1/2 oz Gin",
                    "1 1/2 oz Grapefruit juice",
                    "1/4 oz Lemon juice",
                    "3/4 oz Maraschino Liqueur, Luxardo",
                    "3/4 oz Fernet Branca"
                ],
                "instructions": "In a shaker, combine 1 1/2 oz. each gin and fresh grapefruit juice, 1/4 oz. lemon juice, and 3/4 oz. Luxardo maraschino. Shake with ice and strain into a double rocks glass filled with fresh ice. Top with 3/4 oz. Fernet Branca.",
                "name": "jaded gin daiquiri"
            },
            {
                "ingredients": [
                    "2 oz Barbados Rum, Mount Gay Eclipse Black",
                    "1/2 oz Lime juice",
                    "1/4 oz Demerara syrup",
                    "1/4 oz Cinnamon syrup",
                    "1 ds Bitters, Angostura"
                ],
                "instructions": "Shake, strain, coupe, no garnish",
                "name": "autumn daiquiri"
            },
            {
                "ingredients": [
                    "2 oz Light rum",
                    "3/4 oz Lime juice",
                    "1/2 oz Maraschino Liqueur",
                    "1/2 oz Grapefruit juice",
                    "1 sli Lime (as garnish)"
                ],
                "instructions": "Shake, strain, straight up, coupe, garnish.",
                "name": "hemingway daiquiri"
            },
            {
                "ingredients": [
                    "1 1/2 oz Light rum",
                    "3/4 oz Simple syrup",
                    "1/2 oz Manzanilla sherry",
                    "1/2 oz Lime juice",
                    "2  Strawberry",
                    "1 pn Salt",
                    "1 pn Black pepper"
                ],
                "instructions": "Muddle two strawberries in shaker, shake with rest of ingredients and double strain into chilled cocktail glass. Garnish: skewered strawberry half dusted with black pepper.",
                "name": "strawberry daiquiri (jl remix)"
            },
            {
                "ingredients": [
                    "1 oz Martinique Rum, Rhum JM Blanc",
                    "3/4 oz Brandy (Bertoux)",
                    "3/4 oz Lemon juice",
                    "1/2 oz Suze",
                    "1/2 oz Honey syrup (3:1)",
                    "1/4 oz Simple syrup",
                    "1 wdg Lime (As garnish)"
                ],
                "instructions": "Shake, strain, coupe, garnish.",
                "name": "pennington daiquiri"
            }
        ]
    constructor(){
        super();
        this.state={
            data:this.data,
            loading:false,
            page:1
        }
    }
     async componentDidMount(){
        const name="cocktail"
        const apikey="wxSqjtu9PAwmK4TCxK2jpQ==RQ6cjYQNsxlXsK6b"
        const apiurl="https://api.api-ninjas.com/v1/cocktail?name="+name
        const options={
            mehtod:"GET",
            headers:{
                "X-Api-Key":apikey
            }
        }
        const response=await fetch(apiurl,options)
        const data=await response.json()
        console.log(data)
        this.setState({data:data, loading:false})

    }
    render() {
        return (
        <div className='contianer-fluid my-2' style={{justifyContent:"center"}}>
            <h2>Cocktails....</h2>
            <div className="row">
                {this.state.data.map((element)=>{
                    return <div className="col-md-3">
                        <NameCocktail key={element.name} title={element.name} desc={element.instructions.slice(0,85)+"..."}/>
                    </div>
                })}
                
            </div>
            
        </div>);
    }
}

export default News;