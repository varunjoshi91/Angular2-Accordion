export class ZippyService{
    getData(): Object[]{
        return[
            {
                name: 'Varun',
                title:'tweet1',
                tweet:'I"m Awesome !',
                isFavorite:true,
                imgUrl:"http://lorempixel.com/100/100/people/?10"
            },
            {
                name: 'Joshi',
                title:'tweet2',
                tweet:'Oh Common',
                isFavorite:false,
                imgUrl:"http://lorempixel.com/100/100/people/?22"
            },
            {
                name: 'Batman',
                title:'tweet3',
                tweet:'Shut up Superman',
                isFavorite:true,
                imgUrl:"http://lorempixel.com/100/100/people/?33"
            },
        ];
    }
}