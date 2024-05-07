package components;

public class Goat {

    private String name;

    private int age;
    private String breed;
    private String origin;
    private String image;


    public Goat(){
        this.name = "Goat";
        this.age = 0;
        this.breed = "Unknown";
        this.origin = "Unknown";
        this.image = "Unknown";
    }

    public Goat(String name, int age, String breed, String origin, String image){
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.origin = origin;
        this.image = image;
    } 


    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }   

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        this.age = age;
    }

    public String getBreed(){
        return breed;
    }

    public void setBreed(String breed){
        this.breed = breed;
    }

    public String getOrigin(){
        return origin;
    }

    public void setOrigin(String origin){
        this.origin = origin;
    }

    public String getImage(){
        return image;
    }

    public void setImage(String image){
        this.image = image;
    }


    @Override
    public String toString(){
        return "Goat{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", breed='" + breed + '\'' +
                ", origin='" + origin + '\'' +
                ", image='" + image + '\''+
                '}';
    }

}