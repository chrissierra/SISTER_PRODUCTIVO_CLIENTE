export interface EmpleadoInterface  {

	nombre: InputInterface,
	apellido:InputInterface,
	rut:InputInterface,
	edad:InputInterface,
	sexo:InputInterface,
	nacimiento:InputInterface,
	sueldoLiquido:InputInterface,
	puesto:InputInterface,
	jefatura:InputInterface,
	isapre:InputInterface,
	afp:InputInterface,
	horario:InputInterface,
	nacionalidad:InputInterface,
	horasSemanales:InputInterface,
	direccion:InputInterface,
	comuna:InputInterface,
	sueldoEscrito:InputInterface,
	horaEntrada:InputInterface,
	horaSalida:InputInterface,
	descanso:InputInterface,
	tipoContrato:InputInterface,
	comunaSucursal:InputInterface,
	direccionSucursal:InputInterface,
	diaIngreso:InputInterface,
	mesIngreso:InputInterface,
	anioIngreso:InputInterface,
	estado_civil:InputInterface,
	gratificaciones:InputInterface,
	incentivos:InputInterface,
	bonos:InputInterface,
	tiempo_de_pago:InputInterface,
	tareas_a_desarrollar:InputInterface,
	nombre_empresa_usuario_plataforma:InputInterface,
	tipo_pago_valevista_etc:InputInterface,
	numero_cta:InputInterface,
	tipo_cuenta:InputInterface,
	banco_cuenta_a_pagar:InputInterface,
	horario_con_o_sin_turnos:InputInterface
}	

export interface InputInterface {
	label?:string,
	name: string,
	tipo: string,
	select: boolean,
	value?:string,
	info?:string,
	opciones?:any,
	valor?:any,
	hidden?:any;

}
