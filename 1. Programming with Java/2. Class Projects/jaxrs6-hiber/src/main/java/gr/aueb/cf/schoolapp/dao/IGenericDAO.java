package gr.aueb.cf.schoolapp.dao;

import gr.aueb.cf.schoolapp.model.IdentifiableEntity;

import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * @param <T>
 */

public interface IGenericDAO<T> {

    Optional<T> insert(T t);

    Optional<T> update(T t);

    void delete(Object id);

    Optional<T> getById(Object id);

    List<T> getAll();

    List<? extends T> getByCriteria(Map<String, Object> criteria);

    <K extends T> List<K> getByCriteria(Class<K> clazz, Map<String, Object> criteria);
}
