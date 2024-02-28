import Category from '../models/category';
import Orchid from '../models/orchid';

export const CATEGORIES = [
    new Category('c1', '#f5428d', 'Phalaenopsis'),
    new Category('c2', '#f54242', 'Dendrobium'),
    new Category('c3', '#f5a442', 'Cattleya'),
];

export const ORCHIDS = [
    new Orchid(
        'o1',
        'c1',
        'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRtAzkaoOieqmrpKMrzmUr9km8iaw-GkDL6hkQeg4tZmGwBSpMkiffgeamLcBr0MwcG',
        'Phalaenopsis Orchid',
        "Also known as the Moth Orchid, this popular variety features large, butterfly-like blooms in various colors, making it a popular choice for indoor gardening."
    ),
    new Orchid(
        'o2',
        'c1',
        'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/pink-phalaenopsis-orchid-eva-thomas.jpg',
        "Pink Phalaenopsis Orchid",
        "This variety of Phalaenopsis boasts stunning pink flowers, symbolizing love, affection, and gratitude."
    ),
    new Orchid(
        'o3',
        'c1',
        'https://www.moffatts.co.nz/cdn/shop/products/Phalenopsisorchidwhite.png?v=1687227583',
        'White Phalaenopsis Orchid',
        'Known for their elegance and purity, white Phalaenopsis orchids symbolize new beginnings, innocence, and peace.'
    ),
    new Orchid(
        'o4',
        'c1',
        'https://cdn.brilliantorchids.com/wp-content/uploads/2019/10/01-blue-orchids-feature-805x483.jpg',
        'Blue Phalaenopsis Orchid',
        'A rare and striking variety, blue Phalaenopsis orchids symbolize tranquility, wisdom, and trust.'
    ),
    new Orchid(
        'o5',
        'c1',
        'https://tohgarden.com/wp-content/uploads/2021/12/8-1.png',
        'Multicolored Phalaenopsis Orchid',
        'These vibrant orchids with blooms in various colors symbolize joy, happiness, and celebration.'
    ),
    new Orchid(
        'o6',
        'c2',
        'https://www.gardenia.net/wp-content/uploads/2023/04/ns6ueQLY0Wnwy2rmpE13jM1uYEtU5GsAVPIu7JEU.webp',
        'Dendrobium Orchid',
        'This diverse genus boasts a wide range of flower shapes, sizes, and colors. Many Dendrobium orchids are known for their cascading or compact growth habit, making them ideal for hanging baskets.'
    ),
    new Orchid(
        'o7',
        'c2',
        'https://www.cambridgebee.com/cdn/shop/products/dendrobium2_1200x.jpg?v=1661172785',
        'Dendrobium Nobile Orchid',
        "Also known as the 'Nobile Dendrobium', this variety features clusters of fragrant, white flowers with purple markings, symbolizing nobility and strength."
    ),
    new Orchid(
        'o8',
        'c2',
        'https://i.pinimg.com/originals/93/66/cc/9366ccac327950a83d3306bc599b396e.jpg',
        'Dendrobium Phalaenopsis Orchid',
        'This variety resembles the Phalaenopsis orchid with its large, single blooms. It comes in a variety of colors and symbolizes resilience and overcoming challenges.'
    ),
    new Orchid(
        'o9',
        'c3',
        'https://images.immediate.co.uk/production/volatile/sites/10/2018/11/2048x1365-gg-Orchid-Cattleya-GettyImages-639671270-dcc1360.jpg?quality=90&resize=940,627',
        'Cattleya Orchid',
        'Renowned for their large, showy flowers in vibrant colors like purple, pink, and white, Cattleya orchids are prized for their elegance and cultural significance.'
    ),
    new Orchid(
        'o10',
        'c3',
        'https://3.bp.blogspot.com/-QCEN0DV_hQI/XIuXlVhDWCI/AAAAAAAAN3Y/LAtVSQV8p7MiIXOK_0L11qdEqgrGt078wCLcBGAs/s1600/1024px-Cattleya_walkeriana_%2527Tocao%25E2%2580%2599_Gardner%252C_London_J._Bot._2_662_%25281843%2529_%252844990503684%2529.jpg',
        'Cattleya Walkeriana Orchid',
        'A popular variety with large lavender flowers, Cattleya Walkeriana symbolizes luxury, beauty, and perfection.'
    ),
    new Orchid(
        '011',
        'c3',
        'https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Cattleya_trianae_Dic_a36yJ6DUUK2v.jpe',
        'Cattleya Trianae Orchid',
        "Colombia's national flower, Cattleya Trianae features large, lavender flowers with yellow throats. It symbolizes love, passion, and strength."
    ),
    new Orchid(
        '012',
        'c3',
        'https://www.orchidinsanity.com/wp-content/uploads/2021/11/10_catt_bowringiana_fl_black_bg_rszd-1.jpg',
        'Cattleya Bowringiana Orchid',
        'This variety boasts large, fragrant white flowers with purple markings, symbolizing purity, innocence, and devotion.'
    ),
    new Orchid(
        '013',
        'c3',
        'https://i.ebayimg.com/images/g/8LAAAOSw3ppgLlrU/s-l1600.jpg',
        'Cattleya Luddemanniana Orchid',
        'Known for its unique yellow flowers with purple spots, Cattleya Luddeman.'
    )
]