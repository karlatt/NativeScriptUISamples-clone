import {StylingViewModel} from "./cell-styles-model";
import * as calendarModule from "nativescript-pro-ui/calendar";


var viewModelContext : StylingViewModel;


export function onPageLoaded(args){
 var page = args.object;
    if(viewModelContext === undefined) {
        viewModelContext = new StylingViewModel();
    }
    
    page.bindingContext = viewModelContext;
    viewModelContext.updateViewMode();
}

export function onNavigatedFrom(args) {
    if(args.isBackNavigation === true) {
        viewModelContext = undefined;
    }
}

export function onWeekSetViewModeTap(args: any) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.Week);
}

export function onMonthSetViewModeTap(args: any) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.Month);
}

export function onMonthNamesSetViewModeTap(args: any) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.MonthNames);
}

export function onYearSetViewModeTap(args: any) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.Year);
}