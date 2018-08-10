package com.neuedu.propertyMgr.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class FeeExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public FeeExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andOwnerIsNull() {
            addCriterion("owner is null");
            return (Criteria) this;
        }

        public Criteria andOwnerIsNotNull() {
            addCriterion("owner is not null");
            return (Criteria) this;
        }

        public Criteria andOwnerEqualTo(String value) {
            addCriterion("owner =", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerNotEqualTo(String value) {
            addCriterion("owner <>", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerGreaterThan(String value) {
            addCriterion("owner >", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerGreaterThanOrEqualTo(String value) {
            addCriterion("owner >=", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerLessThan(String value) {
            addCriterion("owner <", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerLessThanOrEqualTo(String value) {
            addCriterion("owner <=", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerLike(String value) {
            addCriterion("owner like", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerNotLike(String value) {
            addCriterion("owner not like", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerIn(List<String> values) {
            addCriterion("owner in", values, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerNotIn(List<String> values) {
            addCriterion("owner not in", values, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerBetween(String value1, String value2) {
            addCriterion("owner between", value1, value2, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerNotBetween(String value1, String value2) {
            addCriterion("owner not between", value1, value2, "owner");
            return (Criteria) this;
        }

        public Criteria andPeopertyIsNull() {
            addCriterion("peoperty is null");
            return (Criteria) this;
        }

        public Criteria andPeopertyIsNotNull() {
            addCriterion("peoperty is not null");
            return (Criteria) this;
        }

        public Criteria andPeopertyEqualTo(Double value) {
            addCriterion("peoperty =", value, "peoperty");
            return (Criteria) this;
        }

        public Criteria andPeopertyNotEqualTo(Double value) {
            addCriterion("peoperty <>", value, "peoperty");
            return (Criteria) this;
        }

        public Criteria andPeopertyGreaterThan(Double value) {
            addCriterion("peoperty >", value, "peoperty");
            return (Criteria) this;
        }

        public Criteria andPeopertyGreaterThanOrEqualTo(Double value) {
            addCriterion("peoperty >=", value, "peoperty");
            return (Criteria) this;
        }

        public Criteria andPeopertyLessThan(Double value) {
            addCriterion("peoperty <", value, "peoperty");
            return (Criteria) this;
        }

        public Criteria andPeopertyLessThanOrEqualTo(Double value) {
            addCriterion("peoperty <=", value, "peoperty");
            return (Criteria) this;
        }

        public Criteria andPeopertyIn(List<Double> values) {
            addCriterion("peoperty in", values, "peoperty");
            return (Criteria) this;
        }

        public Criteria andPeopertyNotIn(List<Double> values) {
            addCriterion("peoperty not in", values, "peoperty");
            return (Criteria) this;
        }

        public Criteria andPeopertyBetween(Double value1, Double value2) {
            addCriterion("peoperty between", value1, value2, "peoperty");
            return (Criteria) this;
        }

        public Criteria andPeopertyNotBetween(Double value1, Double value2) {
            addCriterion("peoperty not between", value1, value2, "peoperty");
            return (Criteria) this;
        }

        public Criteria andPeoTypeIsNull() {
            addCriterion("peo_type is null");
            return (Criteria) this;
        }

        public Criteria andPeoTypeIsNotNull() {
            addCriterion("peo_type is not null");
            return (Criteria) this;
        }

        public Criteria andPeoTypeEqualTo(Integer value) {
            addCriterion("peo_type =", value, "peoType");
            return (Criteria) this;
        }

        public Criteria andPeoTypeNotEqualTo(Integer value) {
            addCriterion("peo_type <>", value, "peoType");
            return (Criteria) this;
        }

        public Criteria andPeoTypeGreaterThan(Integer value) {
            addCriterion("peo_type >", value, "peoType");
            return (Criteria) this;
        }

        public Criteria andPeoTypeGreaterThanOrEqualTo(Integer value) {
            addCriterion("peo_type >=", value, "peoType");
            return (Criteria) this;
        }

        public Criteria andPeoTypeLessThan(Integer value) {
            addCriterion("peo_type <", value, "peoType");
            return (Criteria) this;
        }

        public Criteria andPeoTypeLessThanOrEqualTo(Integer value) {
            addCriterion("peo_type <=", value, "peoType");
            return (Criteria) this;
        }

        public Criteria andPeoTypeIn(List<Integer> values) {
            addCriterion("peo_type in", values, "peoType");
            return (Criteria) this;
        }

        public Criteria andPeoTypeNotIn(List<Integer> values) {
            addCriterion("peo_type not in", values, "peoType");
            return (Criteria) this;
        }

        public Criteria andPeoTypeBetween(Integer value1, Integer value2) {
            addCriterion("peo_type between", value1, value2, "peoType");
            return (Criteria) this;
        }

        public Criteria andPeoTypeNotBetween(Integer value1, Integer value2) {
            addCriterion("peo_type not between", value1, value2, "peoType");
            return (Criteria) this;
        }

        public Criteria andRepairIsNull() {
            addCriterion("repair is null");
            return (Criteria) this;
        }

        public Criteria andRepairIsNotNull() {
            addCriterion("repair is not null");
            return (Criteria) this;
        }

        public Criteria andRepairEqualTo(Double value) {
            addCriterion("repair =", value, "repair");
            return (Criteria) this;
        }

        public Criteria andRepairNotEqualTo(Double value) {
            addCriterion("repair <>", value, "repair");
            return (Criteria) this;
        }

        public Criteria andRepairGreaterThan(Double value) {
            addCriterion("repair >", value, "repair");
            return (Criteria) this;
        }

        public Criteria andRepairGreaterThanOrEqualTo(Double value) {
            addCriterion("repair >=", value, "repair");
            return (Criteria) this;
        }

        public Criteria andRepairLessThan(Double value) {
            addCriterion("repair <", value, "repair");
            return (Criteria) this;
        }

        public Criteria andRepairLessThanOrEqualTo(Double value) {
            addCriterion("repair <=", value, "repair");
            return (Criteria) this;
        }

        public Criteria andRepairIn(List<Double> values) {
            addCriterion("repair in", values, "repair");
            return (Criteria) this;
        }

        public Criteria andRepairNotIn(List<Double> values) {
            addCriterion("repair not in", values, "repair");
            return (Criteria) this;
        }

        public Criteria andRepairBetween(Double value1, Double value2) {
            addCriterion("repair between", value1, value2, "repair");
            return (Criteria) this;
        }

        public Criteria andRepairNotBetween(Double value1, Double value2) {
            addCriterion("repair not between", value1, value2, "repair");
            return (Criteria) this;
        }

        public Criteria andRepairTypeIsNull() {
            addCriterion("repair_type is null");
            return (Criteria) this;
        }

        public Criteria andRepairTypeIsNotNull() {
            addCriterion("repair_type is not null");
            return (Criteria) this;
        }

        public Criteria andRepairTypeEqualTo(Integer value) {
            addCriterion("repair_type =", value, "repairType");
            return (Criteria) this;
        }

        public Criteria andRepairTypeNotEqualTo(Integer value) {
            addCriterion("repair_type <>", value, "repairType");
            return (Criteria) this;
        }

        public Criteria andRepairTypeGreaterThan(Integer value) {
            addCriterion("repair_type >", value, "repairType");
            return (Criteria) this;
        }

        public Criteria andRepairTypeGreaterThanOrEqualTo(Integer value) {
            addCriterion("repair_type >=", value, "repairType");
            return (Criteria) this;
        }

        public Criteria andRepairTypeLessThan(Integer value) {
            addCriterion("repair_type <", value, "repairType");
            return (Criteria) this;
        }

        public Criteria andRepairTypeLessThanOrEqualTo(Integer value) {
            addCriterion("repair_type <=", value, "repairType");
            return (Criteria) this;
        }

        public Criteria andRepairTypeIn(List<Integer> values) {
            addCriterion("repair_type in", values, "repairType");
            return (Criteria) this;
        }

        public Criteria andRepairTypeNotIn(List<Integer> values) {
            addCriterion("repair_type not in", values, "repairType");
            return (Criteria) this;
        }

        public Criteria andRepairTypeBetween(Integer value1, Integer value2) {
            addCriterion("repair_type between", value1, value2, "repairType");
            return (Criteria) this;
        }

        public Criteria andRepairTypeNotBetween(Integer value1, Integer value2) {
            addCriterion("repair_type not between", value1, value2, "repairType");
            return (Criteria) this;
        }

        public Criteria andParkingIsNull() {
            addCriterion("parking is null");
            return (Criteria) this;
        }

        public Criteria andParkingIsNotNull() {
            addCriterion("parking is not null");
            return (Criteria) this;
        }

        public Criteria andParkingEqualTo(Double value) {
            addCriterion("parking =", value, "parking");
            return (Criteria) this;
        }

        public Criteria andParkingNotEqualTo(Double value) {
            addCriterion("parking <>", value, "parking");
            return (Criteria) this;
        }

        public Criteria andParkingGreaterThan(Double value) {
            addCriterion("parking >", value, "parking");
            return (Criteria) this;
        }

        public Criteria andParkingGreaterThanOrEqualTo(Double value) {
            addCriterion("parking >=", value, "parking");
            return (Criteria) this;
        }

        public Criteria andParkingLessThan(Double value) {
            addCriterion("parking <", value, "parking");
            return (Criteria) this;
        }

        public Criteria andParkingLessThanOrEqualTo(Double value) {
            addCriterion("parking <=", value, "parking");
            return (Criteria) this;
        }

        public Criteria andParkingIn(List<Double> values) {
            addCriterion("parking in", values, "parking");
            return (Criteria) this;
        }

        public Criteria andParkingNotIn(List<Double> values) {
            addCriterion("parking not in", values, "parking");
            return (Criteria) this;
        }

        public Criteria andParkingBetween(Double value1, Double value2) {
            addCriterion("parking between", value1, value2, "parking");
            return (Criteria) this;
        }

        public Criteria andParkingNotBetween(Double value1, Double value2) {
            addCriterion("parking not between", value1, value2, "parking");
            return (Criteria) this;
        }

        public Criteria andParkTypeIsNull() {
            addCriterion("park_type is null");
            return (Criteria) this;
        }

        public Criteria andParkTypeIsNotNull() {
            addCriterion("park_type is not null");
            return (Criteria) this;
        }

        public Criteria andParkTypeEqualTo(Integer value) {
            addCriterion("park_type =", value, "parkType");
            return (Criteria) this;
        }

        public Criteria andParkTypeNotEqualTo(Integer value) {
            addCriterion("park_type <>", value, "parkType");
            return (Criteria) this;
        }

        public Criteria andParkTypeGreaterThan(Integer value) {
            addCriterion("park_type >", value, "parkType");
            return (Criteria) this;
        }

        public Criteria andParkTypeGreaterThanOrEqualTo(Integer value) {
            addCriterion("park_type >=", value, "parkType");
            return (Criteria) this;
        }

        public Criteria andParkTypeLessThan(Integer value) {
            addCriterion("park_type <", value, "parkType");
            return (Criteria) this;
        }

        public Criteria andParkTypeLessThanOrEqualTo(Integer value) {
            addCriterion("park_type <=", value, "parkType");
            return (Criteria) this;
        }

        public Criteria andParkTypeIn(List<Integer> values) {
            addCriterion("park_type in", values, "parkType");
            return (Criteria) this;
        }

        public Criteria andParkTypeNotIn(List<Integer> values) {
            addCriterion("park_type not in", values, "parkType");
            return (Criteria) this;
        }

        public Criteria andParkTypeBetween(Integer value1, Integer value2) {
            addCriterion("park_type between", value1, value2, "parkType");
            return (Criteria) this;
        }

        public Criteria andParkTypeNotBetween(Integer value1, Integer value2) {
            addCriterion("park_type not between", value1, value2, "parkType");
            return (Criteria) this;
        }

        public Criteria andOtherIsNull() {
            addCriterion("other is null");
            return (Criteria) this;
        }

        public Criteria andOtherIsNotNull() {
            addCriterion("other is not null");
            return (Criteria) this;
        }

        public Criteria andOtherEqualTo(Double value) {
            addCriterion("other =", value, "other");
            return (Criteria) this;
        }

        public Criteria andOtherNotEqualTo(Double value) {
            addCriterion("other <>", value, "other");
            return (Criteria) this;
        }

        public Criteria andOtherGreaterThan(Double value) {
            addCriterion("other >", value, "other");
            return (Criteria) this;
        }

        public Criteria andOtherGreaterThanOrEqualTo(Double value) {
            addCriterion("other >=", value, "other");
            return (Criteria) this;
        }

        public Criteria andOtherLessThan(Double value) {
            addCriterion("other <", value, "other");
            return (Criteria) this;
        }

        public Criteria andOtherLessThanOrEqualTo(Double value) {
            addCriterion("other <=", value, "other");
            return (Criteria) this;
        }

        public Criteria andOtherIn(List<Double> values) {
            addCriterion("other in", values, "other");
            return (Criteria) this;
        }

        public Criteria andOtherNotIn(List<Double> values) {
            addCriterion("other not in", values, "other");
            return (Criteria) this;
        }

        public Criteria andOtherBetween(Double value1, Double value2) {
            addCriterion("other between", value1, value2, "other");
            return (Criteria) this;
        }

        public Criteria andOtherNotBetween(Double value1, Double value2) {
            addCriterion("other not between", value1, value2, "other");
            return (Criteria) this;
        }

        public Criteria andAllIsNull() {
            addCriterion("all is null");
            return (Criteria) this;
        }

        public Criteria andAllIsNotNull() {
            addCriterion("all is not null");
            return (Criteria) this;
        }

        public Criteria andAllEqualTo(Double value) {
            addCriterion("all =", value, "all");
            return (Criteria) this;
        }

        public Criteria andAllNotEqualTo(Double value) {
            addCriterion("all <>", value, "all");
            return (Criteria) this;
        }

        public Criteria andAllGreaterThan(Double value) {
            addCriterion("all >", value, "all");
            return (Criteria) this;
        }

        public Criteria andAllGreaterThanOrEqualTo(Double value) {
            addCriterion("all >=", value, "all");
            return (Criteria) this;
        }

        public Criteria andAllLessThan(Double value) {
            addCriterion("all <", value, "all");
            return (Criteria) this;
        }

        public Criteria andAllLessThanOrEqualTo(Double value) {
            addCriterion("all <=", value, "all");
            return (Criteria) this;
        }

        public Criteria andAllIn(List<Double> values) {
            addCriterion("all in", values, "all");
            return (Criteria) this;
        }

        public Criteria andAllNotIn(List<Double> values) {
            addCriterion("all not in", values, "all");
            return (Criteria) this;
        }

        public Criteria andAllBetween(Double value1, Double value2) {
            addCriterion("all between", value1, value2, "all");
            return (Criteria) this;
        }

        public Criteria andAllNotBetween(Double value1, Double value2) {
            addCriterion("all not between", value1, value2, "all");
            return (Criteria) this;
        }

        public Criteria andOverageIsNull() {
            addCriterion("overage is null");
            return (Criteria) this;
        }

        public Criteria andOverageIsNotNull() {
            addCriterion("overage is not null");
            return (Criteria) this;
        }

        public Criteria andOverageEqualTo(Double value) {
            addCriterion("overage =", value, "overage");
            return (Criteria) this;
        }

        public Criteria andOverageNotEqualTo(Double value) {
            addCriterion("overage <>", value, "overage");
            return (Criteria) this;
        }

        public Criteria andOverageGreaterThan(Double value) {
            addCriterion("overage >", value, "overage");
            return (Criteria) this;
        }

        public Criteria andOverageGreaterThanOrEqualTo(Double value) {
            addCriterion("overage >=", value, "overage");
            return (Criteria) this;
        }

        public Criteria andOverageLessThan(Double value) {
            addCriterion("overage <", value, "overage");
            return (Criteria) this;
        }

        public Criteria andOverageLessThanOrEqualTo(Double value) {
            addCriterion("overage <=", value, "overage");
            return (Criteria) this;
        }

        public Criteria andOverageIn(List<Double> values) {
            addCriterion("overage in", values, "overage");
            return (Criteria) this;
        }

        public Criteria andOverageNotIn(List<Double> values) {
            addCriterion("overage not in", values, "overage");
            return (Criteria) this;
        }

        public Criteria andOverageBetween(Double value1, Double value2) {
            addCriterion("overage between", value1, value2, "overage");
            return (Criteria) this;
        }

        public Criteria andOverageNotBetween(Double value1, Double value2) {
            addCriterion("overage not between", value1, value2, "overage");
            return (Criteria) this;
        }

        public Criteria andLastTimeIsNull() {
            addCriterion("last_time is null");
            return (Criteria) this;
        }

        public Criteria andLastTimeIsNotNull() {
            addCriterion("last_time is not null");
            return (Criteria) this;
        }

        public Criteria andLastTimeEqualTo(Date value) {
            addCriterion("last_time =", value, "lastTime");
            return (Criteria) this;
        }

        public Criteria andLastTimeNotEqualTo(Date value) {
            addCriterion("last_time <>", value, "lastTime");
            return (Criteria) this;
        }

        public Criteria andLastTimeGreaterThan(Date value) {
            addCriterion("last_time >", value, "lastTime");
            return (Criteria) this;
        }

        public Criteria andLastTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("last_time >=", value, "lastTime");
            return (Criteria) this;
        }

        public Criteria andLastTimeLessThan(Date value) {
            addCriterion("last_time <", value, "lastTime");
            return (Criteria) this;
        }

        public Criteria andLastTimeLessThanOrEqualTo(Date value) {
            addCriterion("last_time <=", value, "lastTime");
            return (Criteria) this;
        }

        public Criteria andLastTimeIn(List<Date> values) {
            addCriterion("last_time in", values, "lastTime");
            return (Criteria) this;
        }

        public Criteria andLastTimeNotIn(List<Date> values) {
            addCriterion("last_time not in", values, "lastTime");
            return (Criteria) this;
        }

        public Criteria andLastTimeBetween(Date value1, Date value2) {
            addCriterion("last_time between", value1, value2, "lastTime");
            return (Criteria) this;
        }

        public Criteria andLastTimeNotBetween(Date value1, Date value2) {
            addCriterion("last_time not between", value1, value2, "lastTime");
            return (Criteria) this;
        }

        public Criteria andThisTimeIsNull() {
            addCriterion("this_time is null");
            return (Criteria) this;
        }

        public Criteria andThisTimeIsNotNull() {
            addCriterion("this_time is not null");
            return (Criteria) this;
        }

        public Criteria andThisTimeEqualTo(Date value) {
            addCriterion("this_time =", value, "thisTime");
            return (Criteria) this;
        }

        public Criteria andThisTimeNotEqualTo(Date value) {
            addCriterion("this_time <>", value, "thisTime");
            return (Criteria) this;
        }

        public Criteria andThisTimeGreaterThan(Date value) {
            addCriterion("this_time >", value, "thisTime");
            return (Criteria) this;
        }

        public Criteria andThisTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("this_time >=", value, "thisTime");
            return (Criteria) this;
        }

        public Criteria andThisTimeLessThan(Date value) {
            addCriterion("this_time <", value, "thisTime");
            return (Criteria) this;
        }

        public Criteria andThisTimeLessThanOrEqualTo(Date value) {
            addCriterion("this_time <=", value, "thisTime");
            return (Criteria) this;
        }

        public Criteria andThisTimeIn(List<Date> values) {
            addCriterion("this_time in", values, "thisTime");
            return (Criteria) this;
        }

        public Criteria andThisTimeNotIn(List<Date> values) {
            addCriterion("this_time not in", values, "thisTime");
            return (Criteria) this;
        }

        public Criteria andThisTimeBetween(Date value1, Date value2) {
            addCriterion("this_time between", value1, value2, "thisTime");
            return (Criteria) this;
        }

        public Criteria andThisTimeNotBetween(Date value1, Date value2) {
            addCriterion("this_time not between", value1, value2, "thisTime");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}