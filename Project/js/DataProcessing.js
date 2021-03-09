function process(data, data_we_like, flag) {

    var new_data = [];

    for (i = 0; i < data.length; i++) {
        var element = data[i];

        var new_element = {};
        var useful_element = true;
        var age_string = "hej";
        var MoBstring = "hej";
        var EdUstring = "hej";
        for (j = 0; j < data_we_like.length; j++) {

            if (flag == 1 || flag == 3) {
                if (element[data_we_like[j]] == "Unknown") {
                    useful_element = false;
                    break;
                }
            }

            //only female, attrited customers allowed.
            if (flag == 1) {
                if (data_we_like[j] == "Gender") {
                    var info = element["Gender"];
                    if (info != "F") {
                        useful_element = false;
                    }
                }
                if (data_we_like[j] == "Attrition_Flag") {
                    var info = element["Attrition_Flag"];
                    if (info != "Attrited Customer") {
                        useful_element = false;
                    }
                }
            }

            if (flag == 3) {
                if (data_we_like[j] == "Education_Level") {
                    var education = element["Education_Level"];

                    if (education == "College" || education == "High School") {
                        EdUstring = "Highschool/College"
                    }
                    else if (education == "Uneducated") {
                        EdUstring = "Uneducated"
                    } else if (education == "Graduate" || education == "Doctorate" || education == "Post-Graduate") {
                        EdUstring = "Above graduate";
                    }
                }
            }

            if (flag == 1) {

                if (data_we_like[j] == "Customer_Age") {
                    var age = element["Customer_Age"];
                    switch (true) {
                        case (age >= 65):
                            age_string = "65 and over";

                            break;
                        case (age >= 50):
                            age_string = "50 - 64";

                            break;
                        case (age >= 35):
                            age_string = "35 - 49";

                            break;
                        case (age < 35):
                            age_string = "34 and under";

                            break;
                        default:
                            age_string = "hej";

                    }
                }
            }
            else if (flag == 2) {

                if (data_we_like[j] == "Customer_Age") {
                    var age = element["Customer_Age"];
                    switch (true) {

                        case (age >= 50 && age <= 65):
                            age_string = "50 - 65";

                            break;
                        case (age <= 35):
                            age_string = "35 and under";

                            break;
                        default:
                            useful_element = false;

                    }
                }
            }
            else if (flag == 3) {
                if (data_we_like[j] == "Customer_Age") {
                    var age = element["Customer_Age"];
                    switch (true) {
                        case (age >= 65):
                            useful_element = false;

                            break;
                        case (age >= 50):
                            age_string = "50 - 64";

                            break;
                        case (age >= 40):
                            age_string = "40 - 49";

                            break;
                        case (age < 40):
                            age_string = "39 and under";

                            break;
                        default:
                            age_string = "hej";

                    }
                }
            }

            if (data_we_like[j] == "Months_on_book") {
                var MoB = element["Months_on_book"];
                switch (true) {
                    case (MoB < 24):
                        MoBstring = "2 years and shorter";

                        break;
                    case (MoB < 36):
                        MoBstring = "2 to 3 years";

                        break;
                    case (MoB < 48):
                        MoBstring = "3 to 4 years";

                        break;
                    case (MoB >= 48):
                        MoBstring = "4 years or longer";

                        break;
                    default:
                        MoBstring = "hej";

                }
            }

            if (age_string !== "hej") {
                new_element[data_we_like[j]] = age_string;
                age_string = "hej";
            } else if (MoBstring !== "hej") {
                new_element[data_we_like[j]] = MoBstring;
                MoBstring = "hej";
            } else if (EdUstring !== "hej") {
                new_element[data_we_like[j]] = EdUstring;
                EdUstring = "hej";
            } else {
                new_element[data_we_like[j]] = element[data_we_like[j]];
            }
        }

        if (useful_element) {
            new_data.push(new_element);
        }
    }
    console.log(new_data);
    return new_data;
}