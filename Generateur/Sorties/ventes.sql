# generated via Exemples/articles.xml;

DROP TABLE IF EXISTS ventes;

CREATE TABLE ventes (
    id VARCHAR(255)  ,
    codeArticle VARCHAR(255) references articles(refArticle) ,
    codeArticle VARCHAR(255)  ,
    mois VARCHAR(255)  ,
    annee VARCHAR(255)  ,
    refVendeur VARCHAR(255) references vendeurs(refVendeur) ,
    refVendeur VARCHAR(255)   ,
    PRIMARY KEY (`id`)
) ; 

INSERT INTO ventes (id,codeArticle,codeArticle,mois,annee,refVendeur,refVendeur) VALUES (1,'SDZaU-484',1,2,2017,933,2017) ;
INSERT INTO ventes (id,codeArticle,codeArticle,mois,annee,refVendeur,refVendeur) VALUES (2,'QGPDQ-949',2,6,2011,4785,2011) ;
INSERT INTO ventes (id,codeArticle,codeArticle,mois,annee,refVendeur,refVendeur) VALUES (3,'BVEVd-368',3,4,2014,933,2014) ;
INSERT INTO ventes (id,codeArticle,codeArticle,mois,annee,refVendeur,refVendeur) VALUES (4,'HYBPk-164',4,7,2018,4792,2018) ;
INSERT INTO ventes (id,codeArticle,codeArticle,mois,annee,refVendeur,refVendeur) VALUES (5,'BHDwm-519',5,1,2012,4792,2012) ;
INSERT INTO ventes (id,codeArticle,codeArticle,mois,annee,refVendeur,refVendeur) VALUES (6,'BHDwm-519',6,7,2015,933,2015) ;
INSERT INTO ventes (id,codeArticle,codeArticle,mois,annee,refVendeur,refVendeur) VALUES (7,'HYBPk-164',7,9,2018,933,2018) ;
INSERT INTO ventes (id,codeArticle,codeArticle,mois,annee,refVendeur,refVendeur) VALUES (8,'BHDwm-519',8,8,2014,933,2014) ;
INSERT INTO ventes (id,codeArticle,codeArticle,mois,annee,refVendeur,refVendeur) VALUES (9,'ZFMCd-867',9,11,2010,4785,2010) ;
INSERT INTO ventes (id,codeArticle,codeArticle,mois,annee,refVendeur,refVendeur) VALUES (10,'ZFMCd-867',10,9,2013,933,2013) ;
INSERT INTO ventes (id,codeArticle,codeArticle,mois,annee,refVendeur,refVendeur) VALUES (11,'ZFMCd-867',11,1,2018,4785,2018) ;
INSERT INTO ventes (id,codeArticle,codeArticle,mois,annee,refVendeur,refVendeur) VALUES (12,'SDZaU-484',12,9,2015,4785,2015) ;
INSERT INTO ventes (id,codeArticle,codeArticle,mois,annee,refVendeur,refVendeur) VALUES (13,'SFBRY-643',13,4,2012,4785,2012) ;
INSERT INTO ventes (id,codeArticle,codeArticle,mois,annee,refVendeur,refVendeur) VALUES (14,'SDZaU-484',14,5,2014,933,2014) ;
INSERT INTO ventes (id,codeArticle,codeArticle,mois,annee,refVendeur,refVendeur) VALUES (15,'QGPDQ-949',15,7,2013,933,2013) ;
