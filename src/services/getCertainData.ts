import anonymous from "../assets/sidebar/anonymous.svg";
import money from "../assets/sidebar/money.svg";
import energy from "../assets/sidebar/energy.svg";
import course from "../assets/sidebar/course.svg";
import play from "../assets/sidebar/play.svg";
import task from "../assets/sidebar/task.svg";
import progress from "../assets/sidebar/progress.svg";
import blog from "../assets/sidebar/blog.svg";
import studia from "../assets/sidebar/studia.svg";
import arrow from "../assets/sidebar/arrow.svg";
import settings from "../assets/sidebar/settings.svg";

import {certainModel, ICertainData} from "../types/certainData";

class CertainData implements ICertainData{
    private _model: certainModel = {
        sideItems: [
            {img: anonymous, title: 'Евгений Павлюкевич'},
            {img: money, title: '10000'},
            {img: energy, title: '10000'},
            {img: course, title: 'Курс'},
            {img: play, title: 'Играть'},
            {img: task, title: 'Задачи'},
            {img: progress, title: 'Прогресс'},
            {img: blog, title: 'Блог'},
            {img: studia, title: 'Студия'},
            {img: arrow, title: 'Свернуть'},
            {img: settings, title: 'Настройки'}
        ],
        weekDays: ['пон', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    }
   public getModel(){
        return this._model
    }
}


export default CertainData