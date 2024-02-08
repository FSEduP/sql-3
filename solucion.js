// SELECT * FROM crime_scene_report WHERE type = "murder" and city = 'SQL City' and  date = '20180115'
//Buscar en la tabla de escenas del crimen, donde el tipo sea un "murder", en la ciudad 'SQL City' y en la fecha '20180115'


// SELECT * FROM person WHERE name LIKE "Annabe%" and address_street_name like "Franklin Ave"
// Buscar en la tabla person con el nombre Annabel y la direccion Franklin Ave


//SELECT * FROM person WHERE address_street_name = "Northwestern Dr" ORDER BY address_number DESC
//Buscar en la tabla person la direccion de la calle "Northwestern Dr" ordenado por orden descendente


//SELECT * FROM interview WHERE person_id = "14887"
//SELECT * FROM interview WHERE person_id = "16371"
//Buscar en la tabla interview los dos testigos y ver sus comentarios


//SELECT * FROM get_fit_now_check_in WHERE membership_id LIKE "48Z%" AND check_in_date = "20180109"
//Buscar en la tabla get_fit_now_check_in el miembro que tuviera un id como "48Z%" y que hubiera entrenado en la fecha "20180109" en base a un testigo


// SELECT * FROM drivers_license WHERE plate_number LIKE "%H42W%" 
//Buscar en la tabla drivers_license el numero de matricula parcial que nos decia un testigo


//SELECT * FROM get_fit_now_member WHERE membership_status LIKE "Gol%"
// Buscar en la tabla get_fit_now_member el tipo de membresia al gimnasio que nos decia un testigo


//SELECT * FROM get_fit_now_member WHERE id = "48Z7A"
//SELECT * FROM get_fit_now_member WHERE id = "48Z55"
// Buscar en get_fit_now_member la informacion de los dos sospechosos


//select person.id, name, plate_number FROM drivers_license
//join person
//on drivers_license.id = person.license_id
//where license_id in(
//SELECT id FROM drivers_license where plate_number like '%h42w%' and gender like 'male')
//buscamos el nombre  que coincida con la matricula y que la matricula coincida con los datos que dieron los testigos(un hombre y nº matricula)

//SOLUCION
Jeremy Bowers
//porque coincide la matrícula y porque ha salido dos veces como sospechoso y porque Joe (el otro sospechoso) estaba en un evento de facebook (SELECT * FROM facebook_event_checkin WHERE person_id = 67318)



//SELECT * FROM interview WHERE person_id = "67318"

/*
SELECT * FROM drivers_license WHERE gender like 'female' 
and hair_color like 'red' 
and car_model like 'model S'
and car_make like 'tesla'
and height between 65 and 67
*/

/*
SELECT * FROM facebook_event_checkin WHERE event_name LIKE "SQL Sym%" 
AND date LIKE "201712%" 
AND GROUP BY person_id COUNT(person_id)
*/