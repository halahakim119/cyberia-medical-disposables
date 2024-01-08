export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurProducts = "ourproducts",
  Certificates = "certificates",
  Sponsors ="sponsors"

}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  brand: string;
  name: string;
  description?: string;
  image: string;
}
