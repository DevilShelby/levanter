$(function(){
    $("#Language_secondary").change(function(){
        resetCKEditorAccordingToLanguage(CKEDITOR.instances.editor4, this.value)
    });
});

function resetCKEditorAccordingToLanguage(ckeditorObj, Language_secondary){
    switch(Language_secondary){
        case 'ARABIAN':
        case 'URDU':
            ckeditorObj.config.contentsLangDirection = 'rtl';
            break;
        default :
            ckeditorObj.config.contentsLangDirection = 'ltr';
            break;
        }
    }
}
