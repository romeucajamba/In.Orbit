enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
  }
  
export interface IFormInput {
    userName: string
    gender: GenderEnum
}