package pe.gob.pronacej.service.procedureSOA;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.gob.pronacej.repository.CjdrRepository;
import pe.gob.pronacej.repository.SoaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Service
public class InsertionEduSoaService {

    @Autowired
    private SoaRepository repository;

    public List<Map<String, Object>> obtenerDatosInsercionEducativa(LocalDate fechaInicio, LocalDate fechaFin) {
        return repository.executeProcedureIE(fechaInicio, fechaFin);
    }

}
