import { Injectable } from '@angular/core';
import { EmpleadoInterface, InputInterface } from './empleado.interface'
@Injectable()
export class EmpleadoService {
  constructor() {}

    
public editarEmpleado(empleado){
    this.array_empleado[0].value=empleado.nombre
    this.array_empleado[1].value=empleado.apellido
    this.array_empleado[2].value=empleado.rut
    this.array_empleado[3].value=empleado.edad
    this.array_empleado[4].value=empleado.sexo
    this.array_empleado[5].value=empleado.nacimiento
    this.array_empleado[6].value=empleado.sueldo
    this.array_empleado[7].value=empleado.puesto
    this.array_empleado[8].value=empleado.jefatura
    this.array_empleado[9].value=empleado.isapre
    this.array_empleado[10].value=empleado.afp
    this.array_empleado[11].value=empleado.horario
    this.array_empleado[12].value=empleado.nacionalidad_empleado
    this.array_empleado[13].value=empleado.horas_jornada
    this.array_empleado[14].value=empleado.direccion_sin_comuna_empleado
    this.array_empleado[15].value=empleado.comuna_empleado
    this.array_empleado[16].value=empleado.sueldo_escrito
    this.array_empleado[17].value=empleado.hora_entrada_jornada
    this.array_empleado[18].value=empleado.hora_salida_jornada
    this.array_empleado[19].value=empleado.descanso_o_almuerzo_en_minutos
    this.array_empleado[20].value=empleado.tipo_contrato
    this.array_empleado[21].value=empleado.comuna_sucursal
    this.array_empleado[22].value=empleado.direccion_sucursal
    this.array_empleado[26].value=empleado.estado_civil
    this.array_empleado[30].value=empleado.tiempo_de_pago
    this.array_empleado[31].value=empleado.tareas_a_desarrollar
    this.array_empleado[33].value=empleado.tipo_pago_valevista_etc
    this.array_empleado[34].value=empleado.numero_cta
    this.array_empleado[35].value=empleado.tipo_cuenta
    this.array_empleado[36].value=empleado.banco_cuenta_a_pagar
    this.array_empleado[37].value=empleado.horario_con_o_sin_turnos
    this.array_empleado[38].valor=empleado.id

    return this.array_empleado;

}




public Empleado: EmpleadoInterface = { 

  nombre:  {
      label: 'Nombre',
      name: 'nombre',
      tipo: 'text',
      select: false,
      value:''

    },


  apellido: {
      label: 'Apellido',
      name: 'apellido',
      tipo: 'text',
      select: false,
      value:''

    },

    
      rut:{
      label: 'Rut',
      name: 'rut',
      tipo: 'text',
      info: 'Si tu rut es 15111999-k debes poner 15111999k ; sin el guión ',
      select: false,
      value:''
      },

    
          edad:{
                label: 'Edad',
                name: 'edad',
                tipo: 'text',
                select: false,
                value:''
                },
     

    
      sexo:  {
      label: 'Sexo',
      name: 'sexo',
      tipo: 'select',
      select: true,
      opciones: [ 'Masculino', 'Femenino']

    },

    

    
              nacimiento:{
                 
              label: 'Fecha Nacimiento',
              name: 'nacimiento',
              tipo: 'date',
              select: false

            },

      
            sueldoLiquido:{
              label: 'Sueldo Líquido',
              name: 'sueldo',
              tipo: 'number',
              info: 'Si trabajador tiene sueldo base con comisiones, poner sueldo base',
              select: false,
              value:''
    
              },
     

      
              puesto:{

            label: 'Puesto',
            name: 'puesto',
            tipo: 'text',
            select: false,
            value:''

          
              
      },


  jefatura:{

      label: 'Jefatura',
      name: 'jefatura',
      tipo: 'text',
      select: false,
      value:''

    
  
},


  isapre:{

      label: 'Isapre',
      name: 'isapre',
      tipo: 'text',
      select: false,
      value:''
    
  
},


  afp:{

      label: 'AFP',
      name: 'afp',
      tipo: 'text',
      select: false,
      value:''

    
  
},


  horario:{

      label: 'Horario',
      name: 'horario',
      tipo: 'number',
      info: 'Debes ingresar las horas semanales a trabajar',
      select: false,
      value:''

    
  
},


  nacionalidad:{

      label: 'Nacionalidad Empleado',
      name: 'nacionalidad_empleado',
      tipo: 'text',
      select: false,
      value:''

    
  
},


  horasSemanales:{

      label: 'Horas Semanales',
      name: 'horas_jornada',
      tipo: 'number',
      info: 'Debes escribir las horas semanales : 45, 36, 18 horas. ',
      select: false,
      value:''

    
  
},

  direccion:{

      label: 'Dirección',
      name: 'direccion_sin_comuna_empleado',
      tipo: 'text',
      info: 'No incluyas la comuna',
      select: false,
      value:''

    
  
},


  comuna:{

      label: 'Comuna',
      name: 'comuna_empleado',
      tipo: 'text',
      select: false,
      value:''

    
  
},


  sueldoEscrito:{

      label: 'Sueldo escrito',
      name: 'sueldo_escrito',
      tipo: 'text',
      info: 'Procura escribir cuidadosamente el sueldo en palabras',
      select: false,
      value:''

    
  
},


  horaEntrada:{

      label: 'Hora Entrada',
      name: 'hora_entrada_jornada',
      tipo: 'time',
      info: 'Escribe la entrada a trabajar',
      select: false,
      value:''

    
  
},


  horaSalida:{

      label: 'Hora salida',
      name: 'hora_salida_jornada',
      tipo: 'time',
      select: false,
      value:''

    
  
},


  descanso:{

      label: 'Descanso en minutos',
      name: 'descanso_o_almuerzo_en_minutos',
      tipo: 'number',
      info: 'Escribe la duración del descanso en minutos',
      select: false,
      value:''

    
  
},


  tipoContrato:{

      label: 'Tipo de Contrato',
      name: 'tipo_contrato',
      tipo: 'text',
      info: 'Selecciona el tipo de contrato para tu trabajador',
      select: true,
      opciones: [ 'Fijo', 'Indefinido', 'Plazo'],
      value:''

    
  
},


  comunaSucursal:{

      label: 'Comuna sucursal', // Debe extraerse las sucursales del empleador 
      name: 'comuna_sucursal',
      tipo: 'text',
      info: 'Escribe donde trabajará tu trabajador',
      select: false,
      value:''

    
  
},


  direccionSucursal:{

      label: 'Direccion sucursal', // Debe extraerse las sucursales del empleador 
      name: 'direccion_sucursal',
      tipo: 'text',
      info: 'Escribe donde trabajará tu trabajador',
      select: false,
      value:''

    
  
},


  diaIngreso:{

      name: 'dia_ingreso',
      tipo: 'hidden',
      hidden: true,
      select: false,
      valor: new Date().getDate(),

    
  
},


  mesIngreso:{

      name: 'mes_ingreso',
      tipo: 'hidden',
      select: false,
      hidden: true,
      valor: (new Date().getMonth()+1 ),

    
  
},


  anioIngreso:{

      name: 'ano_ingreso',
      tipo: 'hidden',
      hidden: true,
      select: false,
      valor: new Date().getFullYear(),

    
  
},


  estado_civil:{

      label: 'Estado Civil',  
      name: 'estado_civil',
      tipo: 'text',
      info: '',
      select: false,
      value:''
    
  
},


  gratificaciones:{

      label: 'Gratificaciones',  
      name: 'gratificaciones',
      tipo: 'text',
      info: '',
      select: false
    
  
},


  incentivos:{

    
      label: 'Incentivos', 
      name: 'incentivos',
      tipo: 'text',
      info: '',
      select: false
    
    
  
},


  bonos:{

      label: 'Bonos',  
      name: 'bonos',
      tipo: 'text',
      info: '',
      select: false
    
  
},


  tiempo_de_pago:{

      label: 'Día de pago',  
      name: 'tiempo_de_pago',
      tipo: 'text',
      info: '',
      select: false,
      value:''
    
  
},


  tareas_a_desarrollar:{

      label: 'Labores a desarrollar',  
      name: 'tareas_a_desarrollar',
      tipo: 'text',
      info: '',
      select: false,
      value:''
    
  
},


  nombre_empresa_usuario_plataforma:{

      name: 'nombre_empresa_usuario_plataforma',
      tipo: 'hidden',
      hidden: true,
      select: false,
      valor: localStorage.getItem("nombre_empresa"),
    
  
},


  tipo_pago_valevista_etc:{

      label: 'Tipo de pago ( Vale vista, transferencia, etc. )',  
      name: 'tipo_pago_valevista_etc',
      tipo: 'text',
      info: '',
      select: false,
      value:''
    
  
},


  numero_cta:{

      label: 'Numero Cuenta',  
      name: 'numero_cta',
      tipo: 'text',
      info: '',
      select: false,
      value:''
    
  
},


  tipo_cuenta:{

      label: 'Tipo cuenta',  
      name: 'tipo_cuenta',
      tipo: 'text',
      info: 'Cuenta corriente, Vista, etc.',
      select: false,
      value:''
    
  
},


  banco_cuenta_a_pagar:{

      label: 'Banco del trabajador',  
      name: 'banco_cuenta_a_pagar',
      tipo: 'text',
      info: '',
      select: false,
      value:''
    
  
},


  horario_con_o_sin_turnos:{

      label: 'Tipo de turnos',  
      name: 'horario_con_o_sin_turnos',
      tipo: 'select',
      select: true,
      opciones: [ 'Turnos', 'Horario Fijo', 'Turnos Noche Incl.'],
      value:''
    
  }

}   
 



public array_empleado: any[] = [
    {
      label: 'Nombre',
      name: 'nombre',
      tipo: 'text',
      select: false,
      value:''

    },
    {
      label: 'Apellido',
      name: 'apellido',
      tipo: 'text',
      select: false,
      value:''

    },
     {
      label: 'Rut',
      name: 'rut',
      tipo: 'text',
      info: 'Si tu rut es 15111999-k debes poner 15111999k ; sin el guión ',
      select: false,
      value:''
    },
    {
      label: 'Edad',
      name: 'edad',
      tipo: 'text',
      select: false,
      value:''

    },
        {
      label: 'Sexo',
      name: 'sexo',
      tipo: 'select',
      select: true,
      opciones: [ 'Masculino', 'Femenino']

    },
    {
      label: 'Fecha Nacimiento',
      name: 'nacimiento',
      tipo: 'date',
      select: false

    },
    {
      label: 'Sueldo Líquido',
      name: 'sueldo',
      tipo: 'number',
      info: 'Si trabajador tiene sueldo base con comisiones, poner sueldo base',
      select: false,
      value:''

    },
    {
      label: 'Puesto',
      name: 'puesto',
      tipo: 'text',
      select: false,
      value:''

    },
    {
      label: 'Jefatura',
      name: 'jefatura',
      tipo: 'text',
      select: false,
      value:''

    },
   
    {
      label: 'Isapre',
      name: 'isapre',
      tipo: 'text',
      select: false,
      value:''
    },
    {
      label: 'AFP',
      name: 'afp',
      tipo: 'text',
      select: false,
      value:''

    },
    {
      label: 'Horario',
      name: 'horario',
      tipo: 'number',
      info: 'Debes ingresar las horas semanales a trabajar',
      select: false,
      value:''

    },
    {
      label: 'Nacionalidad Empleado',
      name: 'nacionalidad_empleado',
      tipo: 'text',
      select: false,
      value:''

    },
    {
      label: 'Horas Semanales',
      name: 'horas_jornada',
      tipo: 'number',
      info: 'Debes escribir las horas semanales : 45, 36, 18 horas. ',
      select: false,
      value:''

    },
    {
      label: 'Dirección',
      name: 'direccion_sin_comuna_empleado',
      tipo: 'text',
      info: 'No incluyas la comuna',
      select: false,
      value:''

    },
    {
      label: 'Comuna',
      name: 'comuna_empleado',
      tipo: 'text',
      select: false,
      value:''

    },
    {
      label: 'Sueldo escrito',
      name: 'sueldo_escrito',
      tipo: 'text',
      info: 'Procura escribir cuidadosamente el sueldo en palabras',
      select: false,
      value:''

    },
       {
      label: 'Hora Entrada',
      name: 'hora_entrada_jornada',
      tipo: 'time',
      info: 'Escribe la entrada a trabajar',
      select: false,
      value:''

    },
       {
      label: 'Hora salida',
      name: 'hora_salida_jornada',
      tipo: 'time',
      select: false,
      value:''

    },
    {
      label: 'Descanso en minutos',
      name: 'descanso_o_almuerzo_en_minutos',
      tipo: 'number',
      info: 'Escribe la duración del descanso en minutos',
      select: false,
      value:''

    },
        {
      label: 'Tipo de Contrato',
      name: 'tipo_contrato',
      tipo: 'text',
      info: 'Selecciona el tipo de contrato para tu trabajador',
      select: true,
      opciones: [ 'Fijo', 'Indefinido', 'Plazo'],
      value:''

    },
    {
      label: 'Comuna sucursal', // Debe extraerse las sucursales del empleador 
      name: 'comuna_sucursal',
      tipo: 'text',
      info: 'Escribe donde trabajará tu trabajador',
      select: false,
      value:''

    },
    {
      label: 'Direccion sucursal', // Debe extraerse las sucursales del empleador 
      name: 'direccion_sucursal',
      tipo: 'text',
      info: 'Escribe donde trabajará tu trabajador',
      select: false,
      value:''

    },
    { 
      name: 'dia_ingreso',
      tipo: 'hidden',
      hidden: true,
      select: false,
      valor: new Date().getDate(),

    },
   {
      name: 'mes_ingreso',
      tipo: 'hidden',
      select: false,
      hidden: true,
      valor: (new Date().getMonth()+1 ),

    },
    {
      name: 'ano_ingreso',
      tipo: 'hidden',
      hidden: true,
      select: false,
      valor: new Date().getFullYear(),

    },
    {
      label: 'Estado Civil',  
      name: 'estado_civil',
      tipo: 'text',
      info: '',
      select: false,
      value:''
    },
    {
      label: 'Gratificaciones',  
      name: 'gratificaciones',
      tipo: 'text',
      info: '',
      select: false
    },
    {
    
      label: 'Incentivos', 
      name: 'incentivos',
      tipo: 'text',
      info: '',
      select: false
    
    },
    {
      label: 'Bonos',  
      name: 'bonos',
      tipo: 'text',
      info: '',
      select: false
    },
    {
      label: 'Día de pago',  
      name: 'tiempo_de_pago',
      tipo: 'text',
      info: '',
      select: false,
      value:''
    },
    {
      label: 'Labores a desarrollar',  
      name: 'tareas_a_desarrollar',
      tipo: 'text',
      info: '',
      select: false,
      value:''
    },  
    {  
      name: 'nombre_empresa_usuario_plataforma',
      tipo: 'hidden',
      hidden: true,
      select: false,
      valor: localStorage.getItem("nombre_empresa"),
    },  
    {
      label: 'Tipo de pago ( Vale vista, transferencia, etc. )',  
      name: 'tipo_pago_valevista_etc',
      tipo: 'text',
      info: '',
      select: false,
      value:''
    },    
    {
      label: 'Numero Cuenta',  
      name: 'numero_cta',
      tipo: 'text',
      info: '',
      select: false,
      value:''
    },    
    {
      label: 'Tipo cuenta',  
      name: 'tipo_cuenta',
      tipo: 'text',
      info: 'Cuenta corriente, Vista, etc.',
      select: false,
      value:''
    },    
    {
      label: 'Banco del trabajador',  
      name: 'banco_cuenta_a_pagar',
      tipo: 'text',
      info: '',
      select: false,
      value:''
    },    

    {
      label: 'Tipo de turnos',  
      name: 'horario_con_o_sin_turnos',
      tipo: 'select',
      select: true,
      opciones: [ 'Turnos', 'Horario Fijo', 'Turnos Noche Incl.'],
      value:''
    },    
     {
      name: 'id',
      tipo: 'hidden',
      hidden: true,
      select: false,
      value:''
    },   
     { 
      name: 'rut_empresa',
      tipo: 'hidden',
      hidden: true,
      select: false,
      valor: localStorage.getItem('rut_empresa'),

    },


  ];





   







  

}




