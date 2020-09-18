function Color()
{
    const colors = [
        'lightblue',
        'lightgreen',
        'pink',
        'BurlyWood',
        'DarkSlateGray',
        'IndianRed',
        'Indigo',
        'LightCoral',
        'LightPink',
        'MediumSeaGreen',
        'MediumSpringGreen',
        'MediumTurquoise',
        'Orange',
        'Plum',
        'RoyalBlue',
        'SpringGreen'
    ]

    const h2_texts = [
        '!תלחץ על הכפתור',
        '!תדגדג את הלחצן',
        '!תרעיש ברעשן',
        '!תפצח את האגוז',
        '!תחלוב את הפרה'
    ]
    
    document.getElementById('h2-text').innerHTML = h2_texts[[Math.floor(Math.random() * h2_texts.length)]]
    document.getElementById("background").innerHTML = `body {background-color: ${colors[Math.floor(Math.random() * colors.length)]};}`
}