function openForm() {
    $('.popup-wrapper').addClass('popup-wrapper-show');
    $('.new-task-backdrop').removeClass('backdrop-out');
    $('.new-task-backdrop').addClass('backdrop-in');
    $('.new-task-popup-form').removeClass('form-out');
    $('.new-task-popup-form').addClass('form-in');
}

function closeForm()
{
    $('.new-task-backdrop').removeClass('backdrop-in');
    $('.new-task-backdrop').addClass('backdrop-out');
    $('.new-task-popup-form').removeClass('form-in');
    $('.new-task-popup-form').addClass('form-out');
    setTimeout(function () {
        $('.popup-wrapper').removeClass('popup-wrapper-show');
    }, '150')
}