const { GraphQLEnumType } = require('graphql');

const CategoryEnumType = new GraphQLEnumType({
    name: 'title',
    description: "The basic product sorting types",
    values:{
        WOMEN :{
            value : 'women'
        },
        MEN :{
            value : "men"
        },
        VEGETABLE :{
            value : "vegetable"
        },
        WATCH :{
            value : "watch"
        },
        FURNITURE :{
            value : "furniture"
        },
        BEAUTY :{
            value : "beauty"
        },
        ELECTRONICS :{
            value : "electronics"
        },
        PETS :{
            value : "pets"
        },
        KIDS :{
            value : "kids"
        },
        BLINDS :{
            value : "blinds"
        },
        CURTAINS :{
            value : "curtains"
        },
        WALLPAPERS :{
            value : "wallpapers"
        },
        RUGS :{
            value : "rugs"
        },
        HEADBOARDS :{
            value : "headboards"
        },
        FLOORINGS :{
            value : "floorings"
        },
        ALL :{
            value : "all"
        }
    }
})

module.export = CategoryEnumType;