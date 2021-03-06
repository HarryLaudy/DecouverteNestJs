import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class annuaire {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Identifiant_de_l_etablissement: string;

    @Column()
    Nom_etablissement: string;

    @Column()
    Type_etablissement: string;


    @Column()
    Statut_public_prive: string;


    @Column()
    Adresse_1: string;


    @Column()
    Adresse_2: string;


    @Column()
    Adresse_3: string;


    @Column()
    Code_postal: string;


    @Column()
    Code_commune: string;


    @Column()
    Nom_commune: string;


    @Column()
    Code_departement: string;


    @Column()
    Code_academie: string;


    @Column()
    Code_region: string;


    @Column()
    Ecolde_maternelle: string;


    @Column()
    Ecole_elementaire: string;


    @Column()
    Voie_generale: string;


    @Column()
    Voie_technologique: string;


    @Column()
    Voie_professionnelle: string;


    @Column()
    Telephone: string;


    @Column()
    Fax: string;


    @Column()
    Web: string;


    @Column()
    Mail: string;


    @Column()
    Restauration: string;


    @Column()
    Hebergement: string;


    @Column()
    ULIS: string;


    @Column()
    Apprentissage: string;


    @Column()
    Segpa: string;


    @Column()
    Section_arts: string;


    @Column()
    Section_cinema: string;


    @Column()
    Section_theatre: string;


    @Column()
    Section_sport: string;


    @Column()
    Section_internationale: string;


    @Column()
    Section_europeenne: string;


    @Column()
    Lycee_Agricole: string;


    @Column()
    Lycee_militaire: string;


    @Column()
    Lycee_des_metiers: string;


    @Column()
    Post_BAC: string;


    @Column()
    Appartenance_Education_Prioritaire: string;


    @Column()
    GRETA: string;


    @Column()
    SIREN_SIRET: string;


    @Column()
    Nombre_d_eleves: string;


    @Column()
    Fiche_onisep: string;


    @Column()
    position: string;


    @Column()
    Type_contrat_prive: string;


    @Column()
    Libelle_departement: string;


    @Column()
    Libelle_academie: string;


    @Column()
    Libelle_region: string;


    @Column()
    coordonnee_X: string;


    @Column()
    coordonnee_Y: string;


    @Column()
    epsg: string;


    @Column()
    nom_circonscription: string;


    @Column()
    latitude: string;


    @Column()
    longitude: string;


    @Column()
    precision_localisation: string;


    @Column()
    date_ouverture: string;


    @Column()
    date_maj_ligne: string;


    @Column()
    etat: string;


    @Column()
    ministere_tutelle: string;


    @Column()
    etablissement_multi_lignes: string;


    @Column()
    rpi_concentre: string;


    @Column()
    rpi_disperse: string;


    @Column()
    code_nature: string;


    @Column()
    libelle_nature: string;


    @Column()
    Code_type_contrat_prive: string;


    @Column()
    PIAL: string;


    @Column()
    etablissement_mere: string;


    @Column()
    type_rattachement_etablissement_mere: string;


    @Column()
    code_bassin_formation: string;


    @Column()
    libelle_bassin_formation: string;
}
