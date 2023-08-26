package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BranchDao;
import com.app.pojo.Branch;

@Transactional
@Service
public class BranchServiceImpl implements BranchService{
	@Autowired
	private BranchDao branchdao;

	@Override
	public List<Branch> getAllBranches() {
		// TODO Auto-generated method stub
		return branchdao.findAll();
	}

	@Override
	public Optional<Branch>getBranchById(int id) {
		// TODO Auto-generated method stub
		return branchdao.findById(id);
	}


	@Override
	public Branch addBranch(Branch branch) {
		// TODO Auto-generated method stub
		return branchdao.save(branch);
	}	

}
