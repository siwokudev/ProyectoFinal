SELECT * FROM qtm.tipo_bebida;

SELECT * FROM producto;
SELECT * FROM tipo_producto;
SELECT * FROM tipo_bebida;
SELECT * FROM tipo_comida;
SELECT * FROM tipo_dulces;

INSERT INTO `qtm`.`producto` (`nombre`, `tipo_producto`, `tipo_dulces`, `precio`) VALUES ('Crunch', '7', '4', '18.00');


INSERT INTO `qtm`.`tipo_comida` (`tipo`) VALUES ('Ensalada');

DELETE FROM producto WHERE id='34';

UPDATE `qtm`.`producto` SET `nombre` = 'Ensalada Verdura', `precio` = '50' WHERE (`id` = '25');

UPDATE `qtm`.`tipo_bebida` SET `tipo` = 'Arizona' WHERE (`id` = '1');
UPDATE `qtm`.`tipo_bebida` SET `tipo` = 'Café' WHERE (`id` = '2');
UPDATE `qtm`.`tipo_bebida` SET `tipo` = 'Refresco' WHERE (`id` = '3');
