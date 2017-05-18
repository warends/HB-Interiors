angular.module('questionaire.factory', []).factory('QFactory', () => {

    var questions = [
        {
            id: 'q1',
            type: 'radio',
            question: 'Which space would you like designed first?',
            text: true,
            cols: 'col-sm-2',
            answers: ['Living', 'Bedroom', 'Dining', 'Bath', 'Kitchen', 'Other']
        },
        {
            id: 'q2',
            type: 'radio',
            question: 'Which image(s) are you drawn to?',
            text: false,
            cols: 'col-sm-2',
            answers: ['img1', 'img2', 'img3', 'img4', 'img5', 'img6']
        },
        {
            id: 'q3',
            type: 'checkbox',
            question: 'Where would you shop for furniture?',
            text: true,
            cols: 'col-sm-2',
            answers: ['Ikea', 'Pier 1', 'West Elm', 'Crate and Barrel', 'CB2', 'Restoration Hardware'],
            images: ['ikea', 'pier-1', 'west-elm', 'crate-barrel', 'cb2', 'restoration']
        },
        {
            id: 'q4',
            type: 'checkbox',
            question: 'What colors would you like to see in the design',
            text: false,
            cols: 'col-sm-2',
            design: 'colors',
            answers: ['Black', 'Grey', 'Red', 'Orange', 'Yellow', 'Lime', 'Green', 'Aqua', 'Turquoise', 'Slate', 'Blue', 'Purple', 'Pink', 'Brown', 'Cream', 'White']
        },
        {
            id: 'q5',
            type: 'checkbox',
            question: 'Select which colors you would NOT want to see',
            text: false,
            cols: 'col-sm-2',
            answers: ['Black', 'Grey', 'Red', 'Orange', 'Yellow', 'Lime', 'Green', 'Aqua', 'Turquoise', 'Slate', 'Blue', 'Purple', 'Pink', 'Brown', 'Cream', 'White']
        },
        {
            id: 'q6',
            type: 'radio',
            question: 'HOW MUCH MONEY ARE YOU BUDGETING FOR YOUR PROJECT AFTER THE DESIGN FEE, WHICH BEGINS AROUND $1,500 PER SPACE?',
            text: false,
            cols: 'col-sm-2',
            answers: ['1-2', '2-5', '5-10', '10-15', '15-25', '25up']
        },
        {
            id: 'q7',
            type: 'text'
        }
    ];

    return {
      list: function(){
        return questions;
      }
    }

});
