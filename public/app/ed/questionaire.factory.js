angular.module('questionaire.factory', []).factory('QFactory', () => {

    var questions = [
        {
            id: 1,
            question: 'Which space would you like designed first?',
            text: true,
            answers: ['Living', 'Bedroom', 'Dining', 'Bath', 'Ktchen', 'Other']
        },
        {
            id: 2,
            question: 'Which image(s) are you drawn to?',
            text: false,
            answers: ['img1', 'img2', 'img3', 'img4', 'img5', 'img6']
        },
        {
            id: 3,
            question: 'Where would you shop for furniture?',
            text: true,
            answers: ['Ikea', 'Pier 1', 'West Elm', 'Crate and Barrel', 'CB2', 'Restoration Hardware']
        },
        {
            id: 4,
            question: 'What colors would you like to see in the design',
            text: false,
            answers: ['Black', 'Grey', 'Red', 'Orange', 'Yellow', 'Lime', 'Green', 'Aqua', 'Turqious', 'Slate', 'Blue', 'Purple', 'Pink', 'Brown', 'Cream', 'White']
        },
        {
            id: 5,
            question: 'Select which colors you would NOT want to see',
            text: false,
            answers: ['Black', 'Grey', 'Red', 'Orange', 'Yellow', 'Lime', 'Green', 'Aqua', 'Turqious', 'Slate', 'Blue', 'Purple', 'Pink', 'Brown', 'Cream', 'White']
        },
        {
            id: 6,
            question: 'HOW MUCH MONEY ARE YOU BUDGETING FOR YOUR PROJECT AFTER THE DESIGN FEE, WHICH BEGINS AROUND $1,500 PER SPACE?',
            text: false,
            answers: ['$1000-$2500', '$2500-$5000', '$5000-$10,000', '$10,000-$15,000', '$15,000-$25,000', '$25,000+']
        }
    ]

});
