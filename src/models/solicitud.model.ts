import {Entity, model, property} from '@loopback/repository';

@model()
export class Solicitud extends Entity {

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  usuarioId: number;
  
@property({
  type: 'number',
  required: true,
})
rolId: number;


  @property({
    type: 'array',
    itemType: 'string',
  })
  documentos?: string[];

@property({
  type: 'string',
  required: true,
  jsonSchema: {
    enum: ['PENDIENTE', 'APROBADO', 'RECHAZADO', 'ACTIVO', 'APROBADA_PENDIENTE_ACTIVACION'],
  },
  default: 'PENDIENTE',
})
estado: 'PENDIENTE' | 'APROBADO' | 'RECHAZADO' | 'ACTIVO' | 'APROBADA_PENDIENTE_ACTIVACION';

  @property({
    type: 'string',
  })
  observacion?: string;


}
export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
