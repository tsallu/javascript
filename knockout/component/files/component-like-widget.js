//define(['knockout'], function(ko) {
define(function() {

    function LikeWidgetViewModel(params) {
        this.chosenValue = params.value;
    }

    LikeWidgetViewModel.prototype.like = function() {
        this.chosenValue('like');
    };

    LikeWidgetViewModel.prototype.dislike = function() {
        this.chosenValue('dislike');
    };

    return LikeWidgetViewModel;

});