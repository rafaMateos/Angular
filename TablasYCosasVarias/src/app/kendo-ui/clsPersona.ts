class Persona{

    /*Propiedades privados*/ 
    private nombre: any;
    private Apellidos: any;
    private IdDept: any;
    private direccion: any;
    private fechaNacimiento: Date;
    private idPersona: any;
    private telefono: any;
    private nombreDepartamento: any;

    /*Propiedades publicas consultables y modificables.*/ 
    public get getNombre() : any {
        return this.nombre;
    }
    
    public get getApellidos() : any {
        return this.Apellidos;
    }

    public get getIdDepartamento() : any {
        return this.IdDept;
    }

    public get getDireccion() : any {
        return this.direccion;
    }

    public get getFechaNacimiento() : Date {
        return this.fechaNacimiento;
    }

    public get getidPersona() : any {
        return this.idPersona;
    }

    public get getTelefono() : any {
        return this.telefono;
    }

    public get getNombreDepartamento() : any {
        return this.nombreDepartamento;
    }

    
    public set setNombre(v : any) {
        this.nombre = v;
    }

    public set setApellidos(v : any) {
        this.Apellidos = v;
    }

    public set setIdDepartamento(v : any) {
        this.IdDept = v;
    }

    public set setDireccion(v : any) {
        this.direccion = v;
    }

    public set setFechaNacimiento(v : Date) {
        this.fechaNacimiento = v;
    }

    public set setidPersona(v : any) {
        this.idPersona = v;
    }

    public set setTelefono(v : any) {
        this.telefono = v;
    }

    public set setNombreDepartamento(v : any) {
        this.nombreDepartamento = v;
    }
    
}