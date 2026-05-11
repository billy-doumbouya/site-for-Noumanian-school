// Schéma de validation Yup
import * as yup from "yup";

export const contactSchema = yup.object({
  nom: yup
    .string()
    .required("Le nom est requis")
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom est trop long")
    .matches(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le nom ne peut contenir que des lettres"),

  prenom: yup
    .string()
    .required("Le prénom est requis")
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom est trop long")
    .matches(
      /^[a-zA-ZÀ-ÿ\s'-]+$/,
      "Le prénom ne peut contenir que des lettres",
    ),

  telephone: yup
    .string()
    .required("Le numéro de téléphone est requis")
    .matches(
      /^(\+224|00224|0)?[0-9]{9,12}$/,
      "Numéro de téléphone invalide (ex: +224 XXX XX XX XX)",
    ),

  email: yup
    .string()
    .required("L'email est requis")
    .email("Format d'email invalide")
    .max(100, "L'email est trop long"),

  sujet: yup
    .string()
    .required("Le sujet est requis")
    .oneOf(
      [
        "Demande d'inscription",
        "Informations générales",
        "Recrutement",
        "Partenariat",
        "Réclamation",
        "Autre",
      ],
      "Sujet invalide",
    ),

  message: yup
    .string()
    .required("Le message est requis")
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(1000, "Le message ne peut pas dépasser 1000 caractères"),
});
