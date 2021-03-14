# UFOs Webpage & Dynamic Table

## Overview

This project demonstrates the usage of javascript, html and github pages functionality. A template webpage is used as a base where a script is embedded that allows for dynamic updates of the UFO sightings table. The table is able to be filtered by multiple criteria dynamically on the webpage- specifically, by the event date, city, state, country and shape of the event.

## Resources

* Data Source: [UFO Data](/static/js/data.js)
* Index Page: [index.html](index.html)
* Script: [app.js](/static/js/ufo_starterCode.js)
* Live Web Page: [https://ifan13.github.io/UFOs/](https://ifan13.github.io/UFOs/)
* Software used: Visual Studio Code
* Languages & Tools: HTML, CSS, JavaScript, Bootstrap, D3.js library

## Results

To use the webpage, click the link to the live web page above in resources or [here](https://ifan13.gihub.io/UFOs/). Visitors to the webpage will be greeted by a banner, a brief blurb, followed by a filter and table. To filter the table, users need only to type in their filter criteria. Hitting return/enter or changing the text box user is working in will then dynamically update the table filtering by the criteria as more filters are added. Note that there are placeholder texts that provide the intended format of the inputs.

[animated_gif_filter](/Resources/filter_table.gif)

## Summary

A draw back of this webpage is ...

To further develop this webpage, one change to the webpage that could be made to improve functionality is in how the input data is handled. Since the input is a text box, users are free to type in whatever they choose and any mismatches may cause the filter to not work properly. Data validation via formatting can be done on the entered filters using the .toLowerCase() method for example and .trim() to force the input to lowercase and remove any leading or trailing white space to match the [data objects](/static/js/data.js).

[string_validation](/Resources/data_validation_by_string_manip.png)

A second recommendation would be adding dynamically updated filters and data validation for filter entry. For example, the date filter could be changed into a datepicker widget (documentation found [here](https://bootstrap-datepicker.readthedocs.io/en/latest/)). For the fields of city, state, country and shape, it would be possible to find all values available in the table and changing these filters to a dropdown menu (documentation found [here](https://getbootstrap.com/docs/5.0/components/dropdowns/)) and changing the filters from open input text boxes to dropdown style filters for city, state, country and shape criteria.

A third recommendation is to increase the table's visibility by increasing the size and putting the filters in a side menu or panel such that the filter could be reached at any point of scrolling the table rather than at the very top of the table. Tools build this would be using Bootstrap and jQuery. Documentation and a sample on how to do this can be found [here](https://www.jqueryscript.net/menu/Sliding-Side-Menu-Panel-with-jQuery-Bootstrap-BootSideMenu.html).
