import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class EjemploPipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {
    console.log("metadata", metadata)
    const newValue = "PREFIJO" + value.toString().toUpperCase();
    if (value === 'query') {
      throw new BadRequestException('Error de ejemplo');
    }
    console.log("VALOR ANTERIOR:", value);
    console.log("VALOR NUEVO   :", newValue);
    return newValue;
  }
}
