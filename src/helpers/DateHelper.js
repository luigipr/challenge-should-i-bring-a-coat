function weekDay(day) {
    const weekDays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
    return weekDays[day];
}

function convertDate(dt) {
    const date = new Date(dt * 1000);
    const dayMonth = date.toLocaleDateString('pt-BR').split('/').slice(0, 2).join('/');
    return `${dayMonth} (${DateHelper.weekDay(date.getDay())})`;
}

export const DateHelper = { weekDay, convertDate }