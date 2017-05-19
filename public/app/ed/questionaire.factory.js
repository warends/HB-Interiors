angular.module('questionaire.factory', []).factory('QFactory', () => {

    var questions = [
        {
            id: 'q1',
            type: 'radio',
            question: 'Which space would you like designed first?',
            cols: 'col-sm-3',
            answers: ['Living', 'Bedroom', 'Dining', 'Bath', 'Kitchen', 'Other']
        },
        {
            id: 'q2',
            type: 'checkbox',
            question: 'Which image(s) are you drawn to?',
            cols: 'col-sm-3',
            images: ['img1', 'img2', 'img3', 'img4', 'img5', 'img6']
        },
        {
            id: 'q3',
            type: 'checkbox',
            question: 'Where would you shop for furniture?',
            cols: 'col-sm-3',
            images: ['ikea', 'pier-1', 'west-elm', 'crate-barrel', 'cb2', 'restoration-hardware']
        },
        {
            id: 'q4',
            type: 'radio',
            question: 'How much money are you budgeting for your project after the design fee, which begins around $1,500 per space?',
            cols: 'col-sm-3',
            answers: ['1-2', '2-5', '5-10', '10-15', '15-25', '25up']
        },
        {
            id: 'q5',
            type: 'checkbox',
            question: 'What colors would you like to see in the design',
            cols: 'col-sm-1',
            design: 'colors',
            answers: ['Black', 'Grey', 'Red', 'Orange', 'Yellow', 'Lime', 'Green', 'Aqua', 'Turquoise', 'Slate', 'Blue', 'Purple', 'Pink', 'Brown', 'Cream', 'White']
        },
        {
            id: 'q6',
            type: 'checkbox',
            question: 'Select which colors you would NOT want to see',
            cols: 'col-sm-1',
            answers: ['Black', 'Grey', 'Red', 'Orange', 'Yellow', 'Lime', 'Green', 'Aqua', 'Turquoise', 'Slate', 'Blue', 'Purple', 'Pink', 'Brown', 'Cream', 'White']
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
