# generated via Exemples/articles.xml;

DROP TABLE IF EXISTS vendeurs;

CREATE TABLE vendeurs (
    id VARCHAR(255)  ,
    vendeur VARCHAR(255)  ,
    refVendeur VARCHAR(255)   ,
    PRIMARY KEY (`id`)
) ; 

INSERT INTO vendeurs (id,vendeur,refVendeur) VALUES (1,'Isidore',4792) ;
INSERT INTO vendeurs (id,vendeur,refVendeur) VALUES (2,'Hermine',4785) ;
INSERT INTO vendeurs (id,vendeur,refVendeur) VALUES (3,'Noella',933) ;
